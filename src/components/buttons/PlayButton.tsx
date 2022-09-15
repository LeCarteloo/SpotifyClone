import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import styled from "styled-components";

type PlayButtonProps = {
  isPlaying: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

type StyleProps = {
  isPlaying: boolean;
};

const StyledButton = styled.button<StyleProps>`
  ${({ theme }) => theme.mixins.scaleHover}
`;

const PlayButton = ({ isPlaying, onClick }: PlayButtonProps) => {
  return (
    <StyledButton isPlaying={isPlaying} onClick={onClick}>
      {isPlaying ? (
        <FaPauseCircle size="1.8em" />
      ) : (
        <FaPlayCircle size="1.8em" />
      )}
    </StyledButton>
  );
};

export default PlayButton;
