import styled from "styled-components";
import Welcome from "./sections/Welcome";
import { UserPlaylistType } from "../types/types";

interface MainProps {
  userPlaylists: UserPlaylistType[];
}

const StyledMain = styled.main`
  grid-area: main;
  height: calc(100% - 4.5em);
  width: calc(100% - 3em);
  margin: 4.5em 1.5em 0 1.5em;
`;

const Main = ({ userPlaylists }: MainProps) => {
  return (
    <StyledMain>
      <Welcome userPlaylists={userPlaylists} />
    </StyledMain>
  );
};

export default Main;
