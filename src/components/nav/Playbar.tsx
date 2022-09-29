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

import { CurrentSongInterface } from "../../types/types";
import { useLocation, useNavigate } from "react-router-dom";

type PlaybarProps = {
  current: CurrentSongInterface;
  onPlay: () => void;
  onProgressChange: (time: number) => void;
};

const StyledFooter = styled.footer`
  grid-area: play-bar;
  padding: 1em;
  background-color: var(--background-highlight);
  width: calc(100% - 2em);
  height: var(--playbar-height);
  align-items: center;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  border-top: 1px solid #282828;

  @media (max-width: 768px) {
    display: none;
  }

  .song-current {
    display: flex;
    width: 40%;
    height: 100%;

    .song-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      color: var(--text-base);
      text-decoration: none;
      margin: 0 1em;
      overflow: hidden;
      white-space: nowrap;

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
    width: 30%;
    .player-buttons {
      display: flex;
      gap: 0.5em;
    }
  }

  .other-buttons {
    display: flex;
    justify-content: flex-end;
    width: 30%;

    gap: 0.7em;
  }
`;

const Playbar = ({ current, onPlay, onProgressChange }: PlaybarProps) => {
  const [liked, setLiked] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

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

  const onLyrics = () => {
    if (location.pathname.toString() === "/lyrics") {
      navigate(-1);
      return;
    }

    navigate("/lyrics");
  };

  const onQueue = () => {};
  const onDevice = () => {};
  const onVolume = () => {};
  const onFullScreen = () => {};

  return (
    <StyledFooter>
      <div className="song-current">
        {current.song && (
          <>
            <img
              src={current.song?.songURL}
              alt="Song cover"
              width="50px"
              height="50px"
            />
            <div className="song-info">
              <h4>{current.song?.name}</h4>
              <h5>{current.song?.artist}</h5>
            </div>
            <LikeButton isLiked={liked} onClick={onLike} />
          </>
        )}
      </div>
      <div className="song-player">
        <div className="player-buttons">
          <ShuffleButton isClicked={shuffle} onClick={onShuffle} />
          <ActionButton
            onClick={onPrevSong}
            icon={<BiSkipPrevious size="2em" />}
          />
          <PlayButton
            isPlaying={current.isPlaying}
            isDisabled={!current.song}
            onClick={onPlay}
          />
          <ActionButton onClick={onNextSong} icon={<BiSkipNext size="2em" />} />
          <RepeatButton repeatAmount={repeat} onClick={onRepeat} />
        </div>
        <Progressbar
          currentTime={current.currDuration}
          songTime={current.song ? current.song.duration : 0}
          onClick={onProgressChange}
        />
      </div>
      <div className="other-buttons">
        <ActionButton
          isActive={location.pathname === "/lyrics"}
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
