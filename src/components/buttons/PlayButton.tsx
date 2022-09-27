import { FaPlayCircle, FaPauseCircle, FaPlay, FaPause } from "react-icons/fa";
import styled, { css } from "styled-components";

type PlayButtonProps = {
  isPlaying: boolean;
  isDisabled?: boolean;
  onClick: (arg: any) => void;
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
  return (
    <StyledButton
      isPlaying={isPlaying}
      onClick={onClick}
      isGreen={isGreen}
      disabled={isDisabled}
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
