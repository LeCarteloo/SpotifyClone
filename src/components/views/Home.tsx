import Welcome from "../sections/Welcome";
import PlaylistSection from "../sections/PlaylistSection";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";

interface HomeProps {
  current: CurrentSongInterface;
  userPlaylists: PlaylistInterface[];
  favoritePlaylists: PlaylistInterface[];
  onPlay: (current: CurrentSongInterface) => void;
}

const Home = ({
  current,
  onPlay,
  userPlaylists,
  favoritePlaylists,
}: HomeProps) => {
  return (
    <>
      <Welcome
        current={current}
        onPlay={onPlay}
        userPlaylists={userPlaylists}
      />
      <PlaylistSection
        title="Favorite playlists"
        current={current}
        playlists={favoritePlaylists}
        onPlay={onPlay}
      />
    </>
  );
};

export default Home;
