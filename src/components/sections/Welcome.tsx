import { useEffect, useState } from "react";
import styled from "styled-components";
import UserPlaylist from "../playlist/UserPlaylist";
import { PlaylistInterface } from "../../types/types";
import { useAppContext } from "../../context/AppContext";

interface WelcomeProps {
  userPlaylists: PlaylistInterface[];
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

const Welcome = ({ userPlaylists }: WelcomeProps) => {
  const [msg, setMsg] = useState("");
  const { currentSong, onPlay } = useAppContext();
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
              currentSong.playlist?.id === playlist.id && currentSong.isPlaying
            }
            currDuration={
              currentSong.playlist?.id === playlist.id
                ? currentSong.currDuration
                : 0
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
