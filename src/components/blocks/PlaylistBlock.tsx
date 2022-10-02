import styled, { css } from "styled-components";
import PlayButton from "../buttons/PlayButton";
import { PlaylistInterface, CurrentSongInterface } from "../../types/types";
import { Link } from "react-router-dom";

interface PlaylistBlockProps {
  isPlaying: boolean;
  playlist: PlaylistInterface;
  currDuration: number;
  onPlay: (current: CurrentSongInterface) => void;
}

type StyledProps = {
  isPlaying: boolean;
};

const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["isPlaying"].includes(prop),
})<StyledProps>`
  position: relative;
  padding: 0.85em;
  width: calc(100% - 0.85em * 2);
  min-width: 125px;
  max-width: 160px;
  background-color: var(--background-highlight);
  border-radius: var(--radius-md);
  overflow: hidden;
  text-decoration: none;
  color: var(--text-base);
  figure {
    position: relative;
    img {
      border-radius: var(--radius-md);
      box-shadow: 0px 0px 10px 0px var(--background-press);
      width: 100%;
      height: auto;
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

const PlaylistBlock = ({
  isPlaying,
  playlist,
  onPlay,
  currDuration,
}: PlaylistBlockProps) => {
  return (
    <StyledLink to={`/playlist/${playlist.id}`} isPlaying={isPlaying}>
      <figure>
        <img src={playlist?.playlistURL} alt="Playlist cover" />
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
    </StyledLink>
  );
};

export default PlaylistBlock;
