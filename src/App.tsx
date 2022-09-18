import styled, { ThemeProvider } from "styled-components";
import Main from "./components/Main";
import Playbar from "./components/nav/Playbar";
import Sidebar from "./components/nav/Sidebar";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import userPlaylists from "./data/userPlaylists.json";
import favoritePlaylists from "./data/favoritePlaylists.json";
import { useState } from "react";

import { CurrentSongInterface, SongListType } from "./types/types";

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
  const [currSong, setCurrSong] = useState<CurrentSongInterface>({
    isPlaying: false,
    playlist: undefined,
    song: undefined,
    currDuration: 0,
  });

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledDiv>
        <Sidebar playlists={userPlaylists} />
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
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
