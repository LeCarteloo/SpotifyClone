import styled, { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import Playbar from "./components/nav/Playbar";
import Sidebar from "./components/nav/Sidebar";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import playlists from "./data/playlists.json";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentSongInterface } from "./types/types";
import Topbar from "./components/nav/Topbar";
import NavbarMobile from "./components/nav/NavbarMobile";
import useIsMobile from "./hooks/useIsMobile";
import PlaybarMobile from "./components/nav/PlaybarMobile";

const StyledDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "side-bar top-bar"
    "side-bar main"
    "play-bar play-bar";
`;

const USER_ID = 1;

function App() {
  const [currSong, setCurrSong] = useState<CurrentSongInterface>({
    isPlaying: false,
    playlist: undefined,
    song: undefined,
    currDuration: 0,
  });
  const isMobile = useIsMobile();

  const onPlay = (current: CurrentSongInterface) => {
    const { isPlaying, playlist, song, currDuration } = current;
    setCurrSong({
      isPlaying: isPlaying ? isPlaying : !currSong.isPlaying,
      playlist: playlist ? playlist : currSong.playlist,
      song: song ? song : currSong.song,
      currDuration: currDuration,
    });
  };

  const onPlaybarPlay = () => {
    setCurrSong({ ...currSong, isPlaying: !currSong.isPlaying });
  };

  const onProgressChange = (time: number) => {
    setCurrSong({ ...currSong, currDuration: time });
  };

  const userPlaylists = playlists.filter(
    (playlist) => playlist.author.id === USER_ID
  );

  const favoritePlaylists = playlists.filter(
    (playlist) => playlist.author.id !== USER_ID && playlist.id < 100
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <StyledDiv>
          <Sidebar
            current={currSong}
            playlists={userPlaylists}
            onPlaylistPause={onPlaybarPlay}
          />
          <Topbar />
          <Main
            current={currSong}
            onPlay={onPlay}
            userPlaylists={userPlaylists}
            favoritePlaylists={favoritePlaylists}
          />
          <Playbar
            current={currSong}
            onPlay={onPlaybarPlay}
            onProgressChange={onProgressChange}
          />
          {isMobile && currSong.song && (
            <PlaybarMobile
              current={currSong}
              onPlay={onPlaybarPlay}
              onProgressChange={onProgressChange}
            />
          )}
          {isMobile && <NavbarMobile />}
        </StyledDiv>
      </Router>
    </ThemeProvider>
  );
}

export default App;
