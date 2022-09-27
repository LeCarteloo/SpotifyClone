import { useState } from "react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsChevronDown, BsList } from "react-icons/bs";
import { FiSpeaker } from "react-icons/fi";
import { TbMicrophone2 } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import ActionButton from "../buttons/ActionButton";
import LikeButton from "../buttons/LikeButton";
import PlayButton from "../buttons/PlayButton";
import RepeatButton from "../buttons/RepeatButton";
import ShuffleButton from "../buttons/ShuffleButton";
import Progressbar from "./Progressbar";

const StyledNav = styled.nav<StyleProps>`
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

const StyledDiv = styled.div`
  .song-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: calc(100% - 3em);
    height: calc(100% - 4.8em);
    padding: 2.4em 1.5em;
    background-color: rgba(0, 0, 0, 1);
    flex-direction: column;
    justify-content: space-around;
    display: flex;
    .menu-header {
      display: flex;
      justify-content: center;
      position: relative;
      .close-btn {
        position: absolute;
        top: 0;
        left: 10%;
      }
    }
    .menu-playlist {
      max-width: 70%;
      font-size: 0.8em;
    }

    .song-cover {
      display: flex;
      justify-content: center;
      img {
        width: 80%;
        height: auto;
        max-width: 300px;
      }
    }
    .song-info {
      display: flex;
      flex-direction: column;
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

type StyleProps = {
  isOpen?: boolean;
};

const PlaybarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const onOpenMenu = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledNav
        aria-label="Playing song navigation"
        onClick={onOpenMenu}
        isOpen={isOpen}
      >
        <div className="playbar-wrapper">
          <div className="playbar-content">
            <img src="https://via.placeholder.com/200" alt="Song cover" />
            <div className="song-nav">
              <div className="song-info">
                <span>Numb</span>
                <span>Linkin Park</span>
              </div>
              <div className="song-buttons">
                <LikeButton isLiked={false} onClick={() => {}} size="1.6em" />
                <PlayButton
                  isPlaying={false}
                  hasBackground={false}
                  onClick={() => {}}
                  size="1.4em"
                />
              </div>
            </div>
          </div>
        </div>
      </StyledNav>
      {isOpen && (
        <StyledDiv>
          <div className="song-menu">
            <div className="menu-header">
              <span className="menu-playlist">
                Polskie przeboje wszech czasów
              </span>
              <button className="close-btn" onClick={onOpenMenu}>
                <BsChevronDown size={"1.5em"} />
              </button>
            </div>
            <div className="song-cover">
              <img src="https://via.placeholder.com/300" alt="Song cover" />
            </div>
            <div className="song-info">
              <h1>Numb</h1>
              <h4>Linkin Park</h4>
            </div>
            <div className="menu-nav">
              <Progressbar currentTime={0} songTime={180} onClick={() => {}} />
              <div className="nav-buttons">
                <ShuffleButton
                  isClicked={false}
                  onClick={() => {}}
                  size={"1.5em"}
                />
                <div className="play-buttons">
                  <ActionButton
                    onClick={() => {}}
                    icon={<BiSkipPrevious size="3em" />}
                  />
                  <PlayButton
                    isPlaying={false}
                    onClick={() => {}}
                    size={"3.5em"}
                  />
                  <ActionButton
                    onClick={() => {}}
                    icon={<BiSkipNext size="3em" />}
                  />
                </div>
                <RepeatButton
                  repeatAmount={2}
                  onClick={() => {}}
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
                    isActive={true}
                    icon={<BsList size={"1.5em"} />}
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </StyledDiv>
      )}
    </>
  );
};

export default PlaybarMobile;
