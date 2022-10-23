import styled, { css } from "styled-components";

import { BiShuffle } from "react-icons/bi";

type ShuffleButtonProps = {
  isClicked: boolean;
  size?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ShuffleButtonProps>`
  ${({ theme }) => theme.mixins.opacityHover}
  ${({ isClicked }) =>
    isClicked &&
    css`
      ${({ theme }) => theme.mixins.buttonActive};
    `}
`;

const ShuffleButton: React.FC<ShuffleButtonProps> = ({
  isClicked,
  size = "1.1em",
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} isClicked={isClicked} aria-label="shuffle">
      <BiShuffle size={size} />
    </StyledButton>
  );
};

export default ShuffleButton;
