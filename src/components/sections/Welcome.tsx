import { useEffect, useState } from "react";
import styled from "styled-components";
import UserPlaylist from "../playlist/UserPlaylist";
import { CurrentSongInterface, PlaylistInterface } from "../../types/types";

interface WelcomeProps {
  current: CurrentSongInterface;
  userPlaylists: PlaylistInterface[];
  onPlay: (current: CurrentSongInterface) => void;
}

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.innerSectionPadding}
  .user-playlists {
    margin-top: 1.2em;
    display: grid;
    grid-gap: 1.1em;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const Welcome = ({ current, userPlaylists, onPlay }: WelcomeProps) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const today = new Date();
    if (today.getHours() < 18 && today.getHours() > 5) {
      setMsg("Good morning");
      return;
    }

    setMsg("Good afternoon");
  }, []);

  return (
    <StyledSection>
      <h2>{msg}</h2>
      <div className="user-playlists">
        {userPlaylists.map((playlist) => (
          <UserPlaylist
            key={playlist.id}
            isPlaying={
              current.playlist?.id === playlist.id && current.isPlaying
            }
            currDuration={
              current.playlist?.id === playlist.id ? current.currDuration : 0
            }
            playlist={playlist}
            onPlay={onPlay}
          />
        ))}
      </div>
    </StyledSection>
  );
};

export default Welcome;
