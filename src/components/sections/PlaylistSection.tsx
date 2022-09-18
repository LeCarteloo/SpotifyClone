import styled from "styled-components";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";
import Playlist from "../playlist/Playlist";

interface PlaylistSectionProps {
  title: string;
  playlists: PlaylistInterface[];
  current: CurrentSongInterface;
  onPlay: (current: CurrentSongInterface) => void;
}

const StyledSection = styled.section`
  width: 100%;
  overflow: hidden;
  h2 {
    margin: 0.8em 0;
  }
  .playlists-list {
    display: flex;
    gap: 1.6em;
    overflow: auto;
  }
`;
const PlaylistSection = ({
  title,
  playlists,
  current,
  onPlay,
}: PlaylistSectionProps) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <div className="playlists-list">
        {playlists.map((playlist) => (
          <Playlist
            key={playlist.id}
            isPlaying={
              current.playlist?.id === playlist.id && current.isPlaying
            }
            currDuration={
              current.playlist?.id === playlist.id ? current.currDuration : 0
            }
            playlist={playlist}
            onPlay={onPlay}
          />
        ))}
      </div>
    </StyledSection>
  );
};

export default PlaylistSection;
