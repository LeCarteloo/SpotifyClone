import styled from "styled-components";
import Welcome from "./sections/Welcome";
import { PlaylistInterface, CurrentSongInterface } from "../types/types";
import PlaylistSection from "./sections/PlaylistSection";

interface MainProps {
  current: CurrentSongInterface;
  userPlaylists: PlaylistInterface[];
  favoritePlaylists: PlaylistInterface[];
  onPlay: (arg: any) => void;
}

const StyledMain = styled.main`
  grid-area: main;
  min-height: calc(100% - 4.5em);
  overflow: auto;
  width: calc(100% - 3em);
  margin: 4.5em 1.5em 0 1.5em;
`;

const Main = ({
  current,
  onPlay,
  userPlaylists,
  favoritePlaylists,
}: MainProps) => {
  console.log("MAIN");
  return (
    <StyledMain>
      <Welcome
        current={current}
        onPlay={onPlay}
        userPlaylists={userPlaylists}
      />
      {/* <PlaylistSection
        title="Favorited playlists"
        playlists={favoritePlaylists}
      /> */}
    </StyledMain>
  );
};

export default Main;
