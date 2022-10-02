import styled from "styled-components";
import LikeButton from "../buttons/LikeButton";
import { BsThreeDots, BsFillPlayFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa";
import { SongListType } from "../../types/types";
import playingGif from "../../assets/playing.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StyledTr = styled.tr`
  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.5em;
  }
  .hide {
    visibility: hidden;
  }
  .song-cover {
    width: 40px;
    height: 40px;
  }
  &:hover,
  &:focus-within {
    .number {
      display: none;
    }
    .hide {
      visibility: visible;
    }
  }
  .col-1 {
    position: relative;
  }
  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
  }
  td {
    padding: 0.47em 1em;
    &:nth-child(n + 3) {
      color: #ffffff88;
      font-weight: 100;
    }
    &:first-child {
      border-top-left-radius: var(--radius-md);
    }
    &:last-child {
      border-top-right-radius: var(--radius-md);
    }

    &:first-child {
      border-bottom-left-radius: var(--radius-md);
    }
    &:last-child {
      border-bottom-right-radius: var(--radius-md);
    }
  }
  .playing-icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.currently-playing {
    .song-name,
    .col-1 {
      color: var(--text-bright-accent);
    }
  }

  .song-title,
  .song-artist,
  .song-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .song-artist {
    text-decoration: none;
    color: var(--text-base);
    ${({ theme }) => theme.mixins.underlineHover};
  }

  .song-album {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  &:hover {
    background-color: var(--essential-tinted);
    td {
      color: var(--text-base);
    }
  }
  &:focus-within {
    background-color: var(--essential-gray);
    td {
      color: var(--text-base);
    }
  }
`;

type PlaylistRowProps = {
  song: SongListType;
  rowNumber: number;
  isPlaying: boolean;
  isCurrentSong: boolean;
  onPlay: React.MouseEventHandler<HTMLElement>;
};

const PlaylistRow = ({
  song,
  rowNumber,
  isPlaying,
  isCurrentSong,
  onPlay,
}: PlaylistRowProps) => {
  const [duration, setDuration] = useState("");
  const date = new Date(song.date);

  useEffect(() => {
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration - minutes * 60;
    setDuration(`${minutes}:${(0 + seconds.toString()).slice(-2)}`);
  }, []);

  return (
    <StyledTr
      onDoubleClick={onPlay}
      tabIndex={0}
      className={isCurrentSong ? "currently-playing" : ""}
    >
      <td className="col-1">
        <span className="number">
          {!isPlaying ? (
            rowNumber
          ) : (
            <img
              src={playingGif}
              className={"playing-icon"}
              alt="Animated icon"
            />
          )}
        </span>
        <button className="play-btn hide" onClick={onPlay}>
          {!isPlaying ? (
            <BsFillPlayFill size={"1.5em"} />
          ) : (
            <FaPause size={"1em"} />
          )}
        </button>
      </td>
      <td className="col-2">
        <div className="song-info">
          <img src={song.songURL} alt="Song cover" className="song-cover" />
          <div className="song-title">
            <span className="song-name">{song.name}</span>
            <Link to={`/artist/${song.artist.id}`} className="song-artist">
              {song.artist.username}
            </Link>
          </div>
        </div>
      </td>
      <td className="col-3">
        <span className="song-album">{song.album}</span>
      </td>
      <td className="col-4">{date.toDateString()}</td>
      <td className="col-5">
        <div className="buttons">
          <div className={`${!song.isLiked ? "hide" : ""}`}>
            <LikeButton isLiked={song.isLiked} onClick={() => {}} />
          </div>
          <span>{duration}</span>
          <div className="hide">
            <button>
              <BsThreeDots />
            </button>
          </div>
        </div>
      </td>
    </StyledTr>
  );
};

export default PlaylistRow;
