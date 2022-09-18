import styled, { css } from "styled-components";
import PlayButton from "../buttons/PlayButton";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";

interface PlaylistProps {
  isPlaying: boolean;
  playlist: PlaylistInterface;
  currDuration: number;
  onPlay: (current: CurrentSongInterface) => void;
}

type StyledProps = {
  isPlaying: boolean;
};

const StyledDiv = styled.div<StyledProps>`
  padding: 0.85em;
  height: 205px;
  width: 125px;
  min-width: 125px;
  background-color: var(--background-highlight);
  border-radius: var(--radius-md);
  overflow: hidden;

  figure {
    position: relative;
    img {
      border-radius: var(--radius-md) var(--radius-md) 0 0;
      box-shadow: 1px 0px 7px 0px var(--background-press);
      width: 100%;
      height: auto;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: yellow;
      bottom: 0;
      left: 0;
      border-radius: 0 0 var(--radius-md) var(--radius-md);
    }
    .play-button {
      position: absolute;
      bottom: 5px;
      right: 5px;
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
  }

  &:hover,
  &:focus-within {
    background-color: var(--background-elevated-highlight);
    .play-button {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .playlist-info {
    margin-top: 0.7em;
    h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      margin-top: 0.7em;
      font-size: var(--fs-xs);
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }
  }
`;

const Playlist = ({
  isPlaying,
  playlist,
  onPlay,
  currDuration,
}: PlaylistProps) => {
  return (
    <StyledDiv isPlaying={isPlaying}>
      <figure>
        <img src="https://via.placeholder.com/200/000" alt="Playlist cover" />
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
            size="2.8em"
          />
        </div>
      </figure>
      <div className="playlist-info">
        <h4>{playlist.name}</h4>
        <span>Queen, Three Days Grace, Papa Roach and more</span>
      </div>
    </StyledDiv>
  );
};

export default Playlist;
