import { ThemeProvider } from "styled-components";
import Playbar from "./components/nav/Playbar";
import Sidebar from "./components/nav/Sidebar";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

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
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sidebar playlists={playlists} />
      {/* <main>
        <h1>Spotify Clone</h1>
      </main> */}
      <Playbar />
    </ThemeProvider>
  );
}

export default App;
