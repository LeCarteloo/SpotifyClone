import styled from "styled-components";
import { PlaylistInterface } from "../../types/types";
import Playlist from "../playlist/Playlist";

interface PlaylistSectionProps {
  title: string;
  playlists: PlaylistInterface[];
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
const PlaylistSection = ({ title, playlists }: PlaylistSectionProps) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <div className="playlists-list">
        {playlists.map((playlist) => (
          <Playlist name={playlist.name} isPlaying={false} />
        ))}
      </div>
    </StyledSection>
  );
};

export default PlaylistSection;
