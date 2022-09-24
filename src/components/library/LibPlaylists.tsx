import styled from "styled-components";
import LikedTracks from "../playlist/LikedTracks";
import Playlist from "../playlist/Playlist";
import test from "../../data/favoritePlaylists.json";

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
        <LikedTracks />
        <Playlist
          isPlaying={true}
          currDuration={30}
          playlist={test[0]}
          onPlay={onPlay}
        />
        <Playlist
          isPlaying={true}
          currDuration={30}
          playlist={test[0]}
          onPlay={onPlay}
        />
        <Playlist
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
