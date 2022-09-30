import styled from "styled-components";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";
import PlaylistBlock from "../blocks/PlaylistBlock";

interface PlaylistSectionProps {
  title: string;
  playlists: PlaylistInterface[];
  current: CurrentSongInterface;
  onPlay: (current: CurrentSongInterface) => void;
}

const StyledSection = styled.section`
  overflow: hidden;
  h2 {
    margin: 0.8em 0;
    ${({ theme }) => theme.mixins.innerSectionPadding}
  }
  .playlists-list {
    display: flex;
    gap: 1.6em;
    overflow: auto;
    padding-bottom: 0.5em;
    min-height: 100%;
    margin: 0 1.9em;
    @media (max-width: 480px) {
      margin: 0;
      padding: 0 1.9em;
    }
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
          <PlaylistBlock
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
