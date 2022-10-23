import { FaPlayCircle, FaPauseCircle, FaPlay, FaPause } from "react-icons/fa";
import styled, { css } from "styled-components";
import { CurrentSongInterface } from "../../types/types";

type PlayButtonProps = {
  isPlaying: boolean;
  isDisabled?: boolean;
  onClick: () => void;
  isGreen?: boolean;
  hasBackground?: boolean;
  size?: string;
};

type StyleProps = {
  isPlaying: boolean;
  isGreen?: boolean;
};

const StyledButton = styled.button<StyleProps>`
  display: flex;
  align-items: center;

  &:not(:disabled) {
    ${({ theme }) => theme.mixins.scaleHover}
  }

  ${({ isGreen }) =>
    isGreen &&
    css`
      color: var(--text-bright-accent);
    `}
  &:disabled {
    opacity: 0.7;
    cursor: auto;
  }
`;

const PlayButton = ({
  isPlaying,
  isDisabled,
  onClick,
  isGreen,
  hasBackground = true,
  size,
}: PlayButtonProps) => {
  const onPlay = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <StyledButton
      isPlaying={isPlaying}
      onClick={onPlay}
      isGreen={isGreen}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-label="play"
    >
      {isPlaying ? (
        hasBackground ? (
          <FaPauseCircle size={size ? size : "1.8em"} />
        ) : (
          <FaPause size={size ? size : "1.8em"} />
        )
      ) : hasBackground ? (
        <FaPlayCircle size={size ? size : "1.8em"} />
      ) : (
        <FaPlay size={size ? size : "1.8em"} />
      )}
    </StyledButton>
  );
};

export default PlayButton;
