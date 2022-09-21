import styled from "styled-components";
import { PlaylistInterface, CurrentSongInterface } from "../types/types";
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
  min-height: 100%;
  overflow: auto;
  width: calc(100% - 3.8em);
  padding: 1.2em 1.9em 0 1.9em;
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
