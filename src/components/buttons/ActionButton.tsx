import styled, { css } from "styled-components";

type animEnum = "scale" | "opacity";

interface ActionButtonProps {
  icon: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  animType?: animEnum;
}

const StyledButton = styled.button<ActionButtonProps>`
  ${({ animType }) =>
    animType === "opacity"
      ? css`
          ${({ theme }) => theme.mixins.opacityHover}
        `
      : css`
          ${({ theme }) => theme.mixins.scaleHover}
        `}
`;

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  onClick,
  animType = "opacity",
}) => {
  return (
    <StyledButton onClick={onClick} animType={animType}>
      {icon}
    </StyledButton>
  );
};

export default ActionButton;
