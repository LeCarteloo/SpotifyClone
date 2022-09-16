import styled from "styled-components";
import Welcome from "./sections/Welcome";
import { PlaylistInterface } from "../types/types";
import PlaylistSection from "./sections/PlaylistSection";

interface MainProps {
  userPlaylists: PlaylistInterface[];
  favoritePlaylists: PlaylistInterface[];
}

const StyledMain = styled.main`
  grid-area: main;
  min-height: calc(100% - 4.5em);
  overflow: auto;
  width: calc(100% - 3em);
  margin: 4.5em 1.5em 0 1.5em;
`;

const Main = ({ userPlaylists, favoritePlaylists }: MainProps) => {
  return (
    <StyledMain>
      <Welcome userPlaylists={userPlaylists} />
      <PlaylistSection
        title="Favorited playlists"
        playlists={favoritePlaylists}
      />
      <PlaylistSection title="Discover new" playlists={favoritePlaylists} />
    </StyledMain>
  );
};

export default Main;
