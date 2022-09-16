import { useState } from "react";
import styled from "styled-components";
import LikeButton from "../buttons/LikeButton";
import ShuffleButton from "../buttons/ShuffleButton";
import RepeatButton from "../buttons/RepeatButton";
import ActionButton from "../buttons/ActionButton";
import Progressbar from "./Progressbar";
import PlayButton from "../buttons/PlayButton";

import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { FiSpeaker, FiVolume2 } from "react-icons/fi";
import { TbMicrophone2 } from "react-icons/tb";
import { MdOpenInFull } from "react-icons/md";
import { BsList } from "react-icons/bs";

const StyledFooter = styled.footer`
  position: absolute;
  padding: 1em;
  bottom: 0;
  background-color: var(--background-elevated-base);
  width: calc(100% - 2em);
  height: var(--playbar-height);
  align-items: center;

  display: flex;
  justify-content: space-between;

  .song-current {
    display: flex;
    width: 100%;

    .song-link {
      display: flex;
      align-items: center;
      height: 100%;
      width: 176px;
      color: var(--text-base);
      text-decoration: none;

      img {
        margin-right: 0.5em;
      }
      h4 {
        font-size: var(--fs-xs);
      }
      h5 {
        font-size: var(--fs-xxs);
      }
    }
  }

  .song-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .player-buttons {
      display: flex;
      gap: 0.5em;
    }
  }

  .other-buttons {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    gap: 0.7em;
  }
`;

const Playbar = () => {
  const [liked, setLiked] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(0);
  const [playing, setPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(216);
  const songTime = 284;

  const onLike = () => {
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

  const onNextSong = () => {};

  const onPrevSong = () => {};

  const onPlay = () => {
    setPlaying(!playing);
  };

  const onProgressClick = (pos: number) => {
    setCurrentTime(pos);
  };

  const onLyrics = () => {};
  const onQueue = () => {};
  const onDevice = () => {};
  const onVolume = () => {};
  const onFullScreen = () => {};

  return (
    <StyledFooter>
      <div className="song-current">
        <a href="" className="song-link">
          <img
            src="https://via.placeholder.com/50"
            alt="Song cover"
            width="50px"
            height="50px"
          />
          <div className="song-info">
            <h4>A Reason to Fight</h4>
            <h5>Disturbed</h5>
          </div>
        </a>
        <LikeButton isLiked={liked} onClick={onLike} />
      </div>
      <div className="song-player">
        <div className="player-buttons">
          <ShuffleButton isClicked={shuffle} onClick={onShuffle} />
          <ActionButton
            onClick={onPrevSong}
            icon={<BiSkipPrevious size="2em" />}
          />
          <PlayButton isPlaying={playing} onClick={onPlay} />
          <ActionButton onClick={onNextSong} icon={<BiSkipNext size="2em" />} />
          <RepeatButton repeatAmount={repeat} onClick={onRepeat} />
        </div>
        <Progressbar
          currentTime={currentTime}
          songTime={songTime}
          onClick={onProgressClick}
        />
      </div>
      <div className="other-buttons">
        <ActionButton
          isActive={true}
          icon={<TbMicrophone2 size={"1em"} />}
          onClick={onLyrics}
        />
        <ActionButton
          isActive={true}
          icon={<BsList size={"1.2em"} />}
          onClick={onQueue}
        />
        <ActionButton icon={<FiSpeaker size={"1em"} />} onClick={onDevice} />
        <ActionButton icon={<FiVolume2 size={"1em"} />} onClick={onVolume} />
        <ActionButton
          icon={<MdOpenInFull size={"1em"} />}
          onClick={onFullScreen}
        />
      </div>
    </StyledFooter>
  );
};

export default Playbar;
