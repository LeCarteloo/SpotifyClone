import styled, { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import Playbar from "./components/nav/Playbar";
import Sidebar from "./components/nav/Sidebar";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import userPlaylists from "./data/userPlaylists.json";
import favoritePlaylists from "./data/favoritePlaylists.json";

const StyledDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    "side-bar main"
    "play-bar play-bar";
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledDiv>
        <Sidebar playlists={userPlaylists} />
        <Main
          userPlaylists={userPlaylists}
          favoritePlaylists={favoritePlaylists}
        />
        <Playbar />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
