import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import styled, { css } from "styled-components";

type PlayButtonProps = {
  isPlaying: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isGreen?: boolean;
  size?: string;
};

type StyleProps = {
  isPlaying: boolean;
  isGreen?: boolean;
};

const StyledButton = styled.button<StyleProps>`
  ${({ theme }) => theme.mixins.scaleHover}
  ${({ isGreen }) =>
    isGreen &&
    css`
      color: var(--text-bright-accent);
    `}
`;

const PlayButton = ({ isPlaying, onClick, isGreen, size }: PlayButtonProps) => {
  return (
    <StyledButton isPlaying={isPlaying} onClick={onClick} isGreen={isGreen}>
      {isPlaying ? (
        <FaPauseCircle size={size ? size : "1.8em"} />
      ) : (
        <FaPlayCircle size={size ? size : "1.8em"} />
      )}
    </StyledButton>
  );
};

export default PlayButton;
