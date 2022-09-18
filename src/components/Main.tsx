import styled from "styled-components";
import Welcome from "./sections/Welcome";
import { PlaylistInterface, CurrentSongInterface } from "../types/types";
import PlaylistSection from "./sections/PlaylistSection";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Lyrics from "./views/Lyrics";

interface MainProps {
  current: CurrentSongInterface;
  userPlaylists: PlaylistInterface[];
  favoritePlaylists: PlaylistInterface[];
  onPlay: (current: CurrentSongInterface) => void;
}

const StyledMain = styled.main`
  grid-area: main;
  min-height: calc(100% - 4.5em);
  overflow: auto;
  width: calc(100% - 3em);
  padding: 4.5em 1.5em 0 1.5em;
`;

const Main = ({
  current,
  onPlay,
  userPlaylists,
  favoritePlaylists,
}: MainProps) => {
  return (
    <StyledMain>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              current={current}
              onPlay={onPlay}
              userPlaylists={userPlaylists}
              favoritePlaylists={favoritePlaylists}
            />
          }
        />
        <Route path="/lyrics" element={<Lyrics />} />
      </Routes>
    </StyledMain>
  );
};

export default Main;
