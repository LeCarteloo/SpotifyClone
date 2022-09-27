import { useState } from "react";
import styled from "styled-components";
import LikeButton from "../buttons/LikeButton";
import PlayButton from "../buttons/PlayButton";

const StyledNav = styled.nav`
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
  }
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
`;

const PlaybarMobile = () => {
  return (
    <StyledNav aria-label="Playing song navigation">
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
  );
};

export default PlaybarMobile;
