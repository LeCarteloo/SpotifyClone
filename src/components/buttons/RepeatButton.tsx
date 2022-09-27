import { RiRepeatFill } from "react-icons/ri";
import styled from "styled-components";
import { css } from "styled-components";

type RepeatButtonProps = {
  repeatAmount: number;
  size?: string;
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
        background-color: ;
        position: absolute;
        width: 7px;
        height: 7px;
        font-size: 0.6em;
        top: 0em;
        left: 50%;
        transform: translateX(-50%);
      }
    `};
`;

const RepeatButton: React.FC<RepeatButtonProps> = ({
  repeatAmount,
  size,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} repeatAmount={repeatAmount}>
      <RiRepeatFill size={size} />
    </StyledButton>
  );
};

export default RepeatButton;
