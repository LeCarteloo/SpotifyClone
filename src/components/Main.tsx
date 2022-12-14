import styled from "styled-components";
import { PlaylistInterface, CurrentSongInterface } from "../types/types";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Lyrics from "./views/Lyrics";
import PlaylistPage from "./views/PlaylistPage";
import Library from "./views/Library";
import Search from "./views/Search";
import GenrePage from "./views/GenrePage";
import UserPage from "./views/UserPage";
import ArtistPage from "./views/ArtistPage";
import Queue from "./views/Queue";
import LibNoData from "./library/LibNoData";
import { FaSpotify } from "react-icons/fa";

interface MainProps {
  userPlaylists: PlaylistInterface[];
  favoritePlaylists: PlaylistInterface[];
}

const StyledMain = styled.main`
  grid-area: main;
  overflow: auto;
  margin-top: calc(var(--topbar-height) * -1);
  padding-bottom: 1em;
  @media (max-width: 768px) {
    min-height: calc(
      100% - (var(--navbar-height) + var(--playbar-height) + 0.5em)
    );
    padding-bottom: calc(var(--navbar-height) + var(--playbar-height) + 0.5em);
  }
`;

const Main = ({ userPlaylists, favoritePlaylists }: MainProps) => {
  const navigate = useNavigate();

  return (
    <StyledMain>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              userPlaylists={userPlaylists}
              favoritePlaylists={favoritePlaylists}
            />
          }
        />
        <Route path="/search" element={<Search />} />
        <Route
          path="/library/*"
          element={<Library userPlaylists={userPlaylists} />}
        />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/genre/:id" element={<GenrePage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/lyrics" element={<Lyrics />} />
        <Route path="/queue" element={<Queue />} />
        <Route
          path="/notfound"
          element={
            <LibNoData
              icon={<FaSpotify size={"5em"} />}
              title={"Page not found"}
              text={"We can't find the page you're looking for."}
              btnText={"Home"}
              onClick={() => {
                navigate("/");
              }}
            />
          }
        />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </StyledMain>
  );
};

export default Main;
