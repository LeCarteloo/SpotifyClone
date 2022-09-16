import styled, { css } from "styled-components";

type animEnum = "scale" | "opacity";

interface ActionButtonProps {
  icon?: JSX.Element;
  isActive?: boolean;
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

  ${({ isActive }) =>
    isActive &&
    css`
      ${({ theme }) => theme.mixins.buttonActive}
    `}
`;

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  isActive,
  onClick,
  animType = "opacity",
}) => {
  return (
    <StyledButton onClick={onClick} animType={animType} isActive={isActive}>
      {icon}
    </StyledButton>
  );
};

export default ActionButton;
