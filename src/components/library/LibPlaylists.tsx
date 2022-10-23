import styled from "styled-components";
import LikedTracksBlock from "../blocks/LikedTracksBlock";
import PlaylistBlock from "../blocks/PlaylistBlock";
import { PlaylistInterface } from "../../types/types";
import { useAppContext } from "../../context/AppContext";

const StyledSection = styled.section`
  h2 {
    margin-bottom: 1em;
  }

  .playlist-grid {
    ${({ theme }) => theme.mixins.blockGrid};
  }
`;

interface LibPlaylistsProps {
  userPlaylists: PlaylistInterface[];
}

const LibPlaylists = ({ userPlaylists }: LibPlaylistsProps) => {
  const { currentSong, onPlay } = useAppContext();

  return (
    <StyledSection>
      <h2>{"Playlists"}</h2>
      <div className="playlist-grid">
        <LikedTracksBlock />
        {userPlaylists &&
          userPlaylists.map((playlist) => (
            <PlaylistBlock
              key={playlist.id}
              isPlaying={
                currentSong.playlist?.id === playlist.id &&
                currentSong.isPlaying
              }
              currDuration={0}
              playlist={playlist}
              onPlay={onPlay}
            />
          ))}
      </div>
    </StyledSection>
  );
};

export default LibPlaylists;
