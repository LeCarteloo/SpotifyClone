import React, { useState } from "react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsChevronDown, BsList } from "react-icons/bs";
import { FiSpeaker } from "react-icons/fi";
import { TbMicrophone2 } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import ActionButton from "../buttons/ActionButton";
import LikeButton from "../buttons/LikeButton";
import PlayButton from "../buttons/PlayButton";
import RepeatButton from "../buttons/RepeatButton";
import ShuffleButton from "../buttons/ShuffleButton";
import Progressbar from "./Progressbar";
import { CurrentSongInterface } from "../../types/types";
import useImageColor from "../../hooks/useImageColor";

const StyledNav = styled.nav<StyleProps>`
  z-index: 10;
  height: var(--playbar-height);
  width: 100%;
  position: absolute;
  bottom: var(--navbar-height);
  .playbar-wrapper {
    height: calc(100% - 1em);
    width: calc(100% - 2em);
    margin: 0 0.5em;
    padding: 0.5em;
    border-radius: var(--radius-md);

    background-color: darkolivegreen;
    ${({ color }) =>
      color &&
      css`
        background-color: ${color};
      `}

    .playbar-content {
      display: flex;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .song-nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .song-info {
      display: flex;
      flex-direction: column;
      margin-left: 0.5em;
    }
    .song-buttons {
      display: flex;
      gap: 1em;
      margin-right: 0.5em;
    }
  }
`;

const StyledDiv = styled.div<StyleProps>`
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: 0.4s;
  z-index: 99;
  &.open {
    top: 0;
    pointer-events: all;
  }
  .song-menu {
    overflow: auto;
    width: calc(100% - 3em);
    height: calc(100% - 4.8em);
    padding: 2.4em 1.5em;
    /* background-color: rgba(0, 0, 0, 1); */
    ${({ color }) =>
      color &&
      css`
        background: linear-gradient(${color}, black);
      `}
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .menu-header {
      display: flex;
      justify-content: center;
      position: relative;
      .close-btn {
        position: absolute;
        top: -5px;
        left: 10%;
      }
    }
    .menu-playlist {
      font-size: 0.8em;
      color: var(--text-base);
      text-decoration: none;
    }

    .song-cover {
      display: flex;
      justify-content: center;
      img {
        width: 80%;
        height: auto;
        max-width: 300px;
      }
      @media screen and (orientation: landscape) {
        display: none;
      }
    }
    .song-info {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 30px;
      }
    }

    .menu-nav {
      width: 100%;
      .nav-buttons {
        margin-top: 0.5em;
        height: 85%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .play-buttons {
        display: flex;
        gap: 1em;
      }
      .extra-buttons {
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          gap: 1em;
        }
      }
    }
  }
`;

interface PlaybarMobileProps {
  current: CurrentSongInterface;
  onPlay: () => void;
  onProgressChange: (time: number) => void;
}

type StyleProps = {
  isOpen?: boolean;
  color?: string;
};

const PlaybarMobile = ({
  current,
  onPlay,
  onProgressChange,
}: PlaybarMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const location = useLocation();
  const color = useImageColor(current.song?.songURL);

  const onLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setLiked(!liked);
  };
  const onShuffle = () => {
    setShuffle(!shuffle);
  };
  const onRepeat = () => {
    if (repeat >= 2) {
      setRepeat(0);
      return;
    }

    setRepeat(repeat + 1);
  };

  const onOpenMenu = (e: any) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledNav
        aria-label="Playing song navigation"
        onClick={onOpenMenu}
        isOpen={isOpen}
        color={color}
      >
        <div className="playbar-wrapper">
          <div className="playbar-content">
            <img src={current.song?.songURL} alt="Song cover" />
            <div className="song-nav">
              <div className="song-info">
                <span>{current.song?.name}</span>
                <span>{current.song?.artist.username}</span>
              </div>
              <div className="song-buttons">
                <LikeButton isLiked={liked} onClick={onLike} size="1.6em" />
                <PlayButton
                  hasBackground={false}
                  isPlaying={current.isPlaying}
                  onClick={onPlay}
                  size="1.4em"
                />
              </div>
            </div>
          </div>
        </div>
      </StyledNav>
      <StyledDiv color={color} className={`${isOpen ? "open" : ""}`}>
        {isOpen && (
          <div className="song-menu">
            <div className="menu-header">
              {current.playlist && (
                <Link
                  to={`/playlist/${current.playlist.id}`}
                  className="menu-playlist"
                  onClick={onOpenMenu}
                >
                  {current.playlist.name}
                </Link>
              )}
              <button className="close-btn" onClick={onOpenMenu}>
                <BsChevronDown size={"1.5em"} />
              </button>
            </div>
            <div className="song-cover">
              <img src={current.song?.songURL} alt="Song cover" />
            </div>
            <div className="song-info">
              <div>
                <h1>{current.song?.name}</h1>
                <h4>{current.song?.artist.username}</h4>
              </div>
              <LikeButton isLiked={liked} onClick={onLike} size="1.6em" />
            </div>
            <div className="menu-nav">
              <Progressbar
                currentTime={current.currDuration}
                songTime={current.song ? current.song.duration : 0}
                onClick={onProgressChange}
              />
              <div className="nav-buttons">
                <ShuffleButton
                  isClicked={shuffle}
                  onClick={onShuffle}
                  size={"1.5em"}
                />
                <div className="play-buttons">
                  <ActionButton
                    onClick={() => {}}
                    icon={<BiSkipPrevious size="3em" />}
                  />
                  <PlayButton
                    isPlaying={current.isPlaying}
                    onClick={onPlay}
                    size={"3.5em"}
                  />
                  <ActionButton
                    onClick={() => {}}
                    icon={<BiSkipNext size="3em" />}
                  />
                </div>
                <RepeatButton
                  repeatAmount={repeat}
                  onClick={onRepeat}
                  size={"1.5em"}
                />
              </div>
              <div className="extra-buttons">
                <ActionButton
                  icon={<FiSpeaker size={"1.3em"} />}
                  onClick={() => {}}
                />
                <div>
                  <ActionButton
                    isActive={location.pathname === "/lyrics"}
                    icon={<TbMicrophone2 size={"1.3em"} />}
                    onClick={() => {}}
                  />
                  <ActionButton
                    isActive={false}
                    icon={<BsList size={"1.5em"} />}
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </StyledDiv>
    </>
  );
};

export default PlaybarMobile;
