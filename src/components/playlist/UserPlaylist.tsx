import styled, { css } from "styled-components";
import PlayButton from "../buttons/PlayButton";
import {
  SongListType,
  PlaylistInterface,
  CurrentSongInterface,
} from "../../types/types";

interface UserPlaylistProps {
  isPlaying: boolean;
  playlist: PlaylistInterface;
  currDuration: number;
  onPlay: (current: CurrentSongInterface) => void;
}

type StyledProps = {
  isPlaying: boolean;
};

const StyledDiv = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  background-color: #0000004f;
  border-radius: var(--radius-small);
  height: 70px;
  overflow: hidden;
  position: relative;

  img {
    height: 100%;
    width: auto;
    border-radius: var(--radius-small) 0 0 var(--radius-small);
  }

  h3 {
    margin-left: 0.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .play-button {
    position: absolute;
    right: 0.5em;
    transition: 0.2s ease-in-out;
    ${({ isPlaying }) =>
      isPlaying
        ? css`
            .play-button {
              transform: translateY(0px);
              opacity: 1;
            }
          `
        : css`
            transform: translateY(5px);
            opacity: 0;
          `}
  }

  &:hover,
  &:focus-within {
    background-color: var(--background-elevated-highlight);
    .play-button {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const UserPlaylist = ({
  isPlaying,
  playlist,
  onPlay,
  currDuration,
}: UserPlaylistProps) => {
  return (
    <StyledDiv isPlaying={isPlaying}>
      <img src={playlist.playlistURL} alt="Playlist cover" />
      <h3>{playlist.name}</h3>
      <div className="play-button">
        <PlayButton
          isPlaying={isPlaying}
          onClick={() =>
            onPlay({
              isPlaying: !isPlaying,
              playlist: playlist,
              song: playlist.songList[0],
              currDuration: currDuration,
            })
          }
          isGreen={true}
          size="2.5em"
        />
      </div>
    </StyledDiv>
  );
};

export default UserPlaylist;
