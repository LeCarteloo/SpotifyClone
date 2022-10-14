import styled from "styled-components";
import LikedTracksBlock from "../blocks/LikedTracksBlock";
import PlaylistBlock from "../blocks/PlaylistBlock";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";

const StyledSection = styled.section`
  h2 {
    margin-bottom: 1em;
  }

  .playlist-grid {
    ${({ theme }) => theme.mixins.blockGrid};
  }
`;

interface LibPlaylistsProps {
  current: CurrentSongInterface;
  userPlaylists: PlaylistInterface[];
  onPlay: (current: CurrentSongInterface) => void;
}

const LibPlaylists = ({
  current,
  userPlaylists,
  onPlay,
}: LibPlaylistsProps) => {
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
                current.playlist?.id === playlist.id && current.isPlaying
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
