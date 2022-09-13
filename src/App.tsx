import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

const theme = {
  primary: "#1DB954",
  font: "#FFFFFF",
  bg: "#191414",
};
type ThemeType = typeof theme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <h1>Spotify Clone</h1>
      </main>
    </ThemeProvider>
  );
}

export { ThemeType };
export default App;
