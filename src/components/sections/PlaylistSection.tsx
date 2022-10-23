import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import { PlaylistInterface } from "../../types/types";
import PlaylistBlock from "../blocks/PlaylistBlock";

interface PlaylistSectionProps {
  title: string;
  playlists: PlaylistInterface[];
}

const StyledSection = styled.section`
  padding-bottom: 0.5em;
  margin: 0 1.9em;
  @media (max-width: 480px) {
    margin: 0;
    padding: 0 1em;
  }

  overflow: hidden;
  h2 {
    margin: 0.8em 0;
  }
  .playlists-list {
    display: flex;
    gap: 1.6em;
    overflow: auto;
    min-height: 100%;
  }
`;
const PlaylistSection = ({ title, playlists }: PlaylistSectionProps) => {
  const { currentSong, onPlay } = useAppContext();

  return (
    <StyledSection>
      <h2>{title}</h2>
      <div className="playlists-list">
        {playlists.map((playlist) => (
          <PlaylistBlock
            key={playlist.id}
            isPlaying={
              currentSong.playlist?.id === playlist.id && currentSong.isPlaying
            }
            currDuration={
              currentSong.playlist?.id === playlist.id
                ? currentSong.currDuration
                : 0
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
