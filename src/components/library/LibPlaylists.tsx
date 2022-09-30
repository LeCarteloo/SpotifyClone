import styled from "styled-components";
import LikedTracksBlock from "../blocks/LikedTracksBlock";
import PlaylistBlock from "../blocks/PlaylistBlock";
import test from "../../data/playlists.json";

const StyledSection = styled.section`
  h2 {
    margin-bottom: 1em;
  }

  .playlist-grid {
    ${({ theme }) => theme.mixins.blockGrid};
  }
`;

const LibPlaylists = () => {
  const onPlay = () => {};

  return (
    <StyledSection>
      <h2>{"Playlists"}</h2>
      <div className="playlist-grid">
        <LikedTracksBlock />
        <PlaylistBlock
          isPlaying={true}
          currDuration={30}
          playlist={test[0]}
          onPlay={onPlay}
        />
        <PlaylistBlock
          isPlaying={true}
          currDuration={30}
          playlist={test[0]}
          onPlay={onPlay}
        />
        <PlaylistBlock
          isPlaying={true}
          currDuration={30}
          playlist={test[0]}
          onPlay={onPlay}
        />
      </div>
    </StyledSection>
  );
};

export default LibPlaylists;
