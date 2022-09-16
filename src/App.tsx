import styled, { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import Playbar from "./components/nav/Playbar";
import Sidebar from "./components/nav/Sidebar";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

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
  // Sample data
  const playlists = [
    {
      id: 1,
      name: "Rock",
    },
    {
      id: 2,
      name: "Cyberpunk",
    },
    {
      id: 3,
      name: "Pop",
    },
    {
      id: 4,
      name: "Very very very long name of playlist",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledDiv>
        <Sidebar playlists={playlists} />
        <Main />
        <Playbar />
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
