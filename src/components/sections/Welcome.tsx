import { useEffect, useState } from "react";
import styled from "styled-components";
import UserPlaylist from "../playlist/UserPlaylist";
import { PlaylistInterface } from "../../types/types";

interface WelcomeProps {
  userPlaylists: PlaylistInterface[];
}

const StyledSection = styled.section`
  width: 100%;
  .user-playlists {
    margin-top: 1.2em;
    display: grid;
    grid-gap: 1.1em;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Welcome = ({ userPlaylists }: WelcomeProps) => {
  const [msg, setMsg] = useState<String>("");

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
            id={playlist.id}
            name={playlist.name}
            playlistURL={playlist.playlistURL}
          />
        ))}
      </div>
    </StyledSection>
  );
};

export default Welcome;
