import Welcome from "../sections/Welcome";
import PlaylistSection from "../sections/PlaylistSection";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";
import styled from "styled-components";

interface HomeProps {
  current: CurrentSongInterface;
  userPlaylists: PlaylistInterface[];
  favoritePlaylists: PlaylistInterface[];
  onPlay: (current: CurrentSongInterface) => void;
}

const StyledDiv = styled.div`
  padding-top: calc(var(--topbar-height) + 1.2em);
  height: calc(100% - (var(--topbar-height) + 1.2em));
`;

const Home = ({
  current,
  onPlay,
  userPlaylists,
  favoritePlaylists,
}: HomeProps) => {
  return (
    <StyledDiv>
      <Welcome
        current={current}
        onPlay={onPlay}
        userPlaylists={userPlaylists}
      />
      <PlaylistSection
        title="Favorite playlists"
        current={current}
        playlists={favoritePlaylists}
        onPlay={onPlay}
      />
    </StyledDiv>
  );
};

export default Home;
