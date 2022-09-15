import styled, { css } from "styled-components";

import { BiShuffle } from "react-icons/bi";

type ShuffleButtonProps = {
  isClicked?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ShuffleButtonProps>`
  ${({ theme }) => theme.mixins.opacityHover}
  ${({ isClicked }) =>
    isClicked &&
    css`
      ${({ theme }) => theme.mixins.buttonAcitve}
    `}
`;

const ShuffleButton: React.FC<ShuffleButtonProps> = ({
  isClicked,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} isClicked={isClicked}>
      <BiShuffle size={"1.1em"} />
    </StyledButton>
  );
};

export default ShuffleButton;
