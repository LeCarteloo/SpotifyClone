import Welcome from "../sections/Welcome";
import PlaylistSection from "../sections/PlaylistSection";
import { PlaylistInterface } from "../../types/types";
import styled from "styled-components";

interface HomeProps {
  userPlaylists: PlaylistInterface[];
  favoritePlaylists: PlaylistInterface[];
}

const StyledDiv = styled.div`
  padding-top: calc(var(--topbar-height) + 1.2em);
`;

const Home = ({ userPlaylists, favoritePlaylists }: HomeProps) => {
  return (
    <StyledDiv>
      <Welcome userPlaylists={userPlaylists} />
      <PlaylistSection
        title="Favorite playlists"
        playlists={favoritePlaylists}
      />
    </StyledDiv>
  );
};

export default Home;
