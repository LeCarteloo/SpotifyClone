import styled from "styled-components";
import { PlaylistInterface, CurrentSongInterface } from "../types/types";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Lyrics from "./views/Lyrics";
import PlaylistPage from "./views/PlaylistPage";
import Library from "./views/Library";
import Search from "./views/Search";
import GenrePage from "./views/GenrePage";

interface MainProps {
  current: CurrentSongInterface;
  userPlaylists: PlaylistInterface[];
  favoritePlaylists: PlaylistInterface[];
  onPlay: (current: CurrentSongInterface) => void;
}

const StyledMain = styled.main`
  grid-area: main;
  overflow: auto;
  min-height: 100%;
  margin-top: calc(var(--topbar-height) * -1);
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
        <Route path="/search" element={<Search />} />
        <Route path="/library/*" element={<Library />} />
        <Route
          path="/playlist/:id"
          element={<PlaylistPage current={current} onPlay={onPlay} />}
        />
        <Route
          path="/genre/:id"
          element={<GenrePage current={current} onPlay={onPlay} />}
        />
        <Route
          path="/lyrics"
          element={<Lyrics songName={current.song?.name} />}
        />
      </Routes>
    </StyledMain>
  );
};

export default Main;
