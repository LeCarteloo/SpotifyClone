import { RiRepeatFill } from "react-icons/ri";
import styled from "styled-components";
import { css } from "styled-components";

type RepeatButtonProps = {
  repeatAmount: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<RepeatButtonProps>`
  ${({ theme }) => theme.mixins.opacityHover}
  ${({ repeatAmount }) =>
    repeatAmount &&
    css`
      ${({ theme }) => theme.mixins.buttonActive};
      &::before {
        content: "${repeatAmount}";
        position: absolute;
        width: 7px;
        height: 7px;
        font-size: 0.6em;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    `};
`;

const RepeatButton: React.FC<RepeatButtonProps> = ({
  repeatAmount,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} repeatAmount={repeatAmount}>
      <RiRepeatFill />
    </StyledButton>
  );
};

export default RepeatButton;
