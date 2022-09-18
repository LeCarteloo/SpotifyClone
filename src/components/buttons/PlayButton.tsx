import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import styled, { css } from "styled-components";
import { SongListType, PlaylistInterface } from "../../types/types";

type PlayButtonProps = {
  isPlaying: boolean;
  isDisabled?: boolean;
  onClick: (arg: any) => void;
  isGreen?: boolean;
  size?: string;
};

type StyleProps = {
  isPlaying: boolean;
  isGreen?: boolean;
};

const StyledButton = styled.button<StyleProps>`
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
        <FaPauseCircle size={size ? size : "1.8em"} />
      ) : (
        <FaPlayCircle size={size ? size : "1.8em"} />
      )}
    </StyledButton>
  );
};

export default PlayButton;
