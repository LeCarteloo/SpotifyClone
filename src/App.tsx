import { ThemeProvider } from "styled-components";
import SideBar from "./components/nav/SideBar";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SideBar />
      {/* <main>
        <h1>Spotify Clone</h1>
      </main> */}
    </ThemeProvider>
  );
}

export default App;
