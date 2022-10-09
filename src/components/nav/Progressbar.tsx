import React, { useRef } from "react";
import styled, { css } from "styled-components";

type ProgressbarProps = {
  currentTime: number;
  songTime: number;
  onClick: Function;
};

type ProgressProps = {
  progress: number;
};

const StyledDiv = styled.div<ProgressProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  width: 100%;

  span {
    font-size: var(--fs-xs);
  }
  .progress-bar {
    width: 100%;
    height: 4px;
    border-radius: var(--radius-small);
    background-color: var(--essential-gray);
  }

  &:hover,
  &:focus-within {
    .progress {
      background-color: var(--essential-bright-accent);
      &::after {
        content: "";
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: var(--essential-base);
        position: absolute;
        top: 50%;
        right: -7px;
        transform: translateY(-50%);
        ${({ progress }) =>
          !progress &&
          css`
            display: none;
          `}
      }
    }
  }

  .progress {
    ${({ progress }) =>
      progress &&
      css`
        width: ${progress}%;
      `}
    height: inherit;
    border-radius: inherit;
    background-color: var(--essential-base);
    position: relative;
  }
`;

const Progressbar = ({ currentTime, songTime, onClick }: ProgressbarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = currentTime - currentMinutes * 60;
  const songMinutes = Math.floor(songTime / 60);
  const songSeconds = songTime - songMinutes * 60;

  const onProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = progressRef?.current?.getBoundingClientRect();
    const fullWidth = rect!.width;
    const newTime = Math.floor(
      ((e.clientX - rect!.left) / fullWidth) * songTime
    );

    onClick(newTime);
  };

  return (
    <StyledDiv
      progress={(currentTime / songTime) * 100}
      onClick={onProgressClick}
    >
      <span>
        {`${currentMinutes}:${(0 + currentSeconds.toString()).slice(-2)}`}
      </span>
      <div className="progress-bar" ref={progressRef}>
        <div className="progress"></div>
      </div>
      <span>{`${songMinutes}:${(0 + songSeconds.toString()).slice(-2)}`}</span>
    </StyledDiv>
  );
};

export default Progressbar;
