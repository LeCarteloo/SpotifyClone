import styled, { css } from "styled-components";

type animEnum = "scale" | "opacity";

interface ActionButtonProps {
  icon?: JSX.Element;
  name: string;
  isActive?: boolean;
  animType?: animEnum;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

type StyledProps = {
  isActive?: boolean;
  animType?: animEnum;
};

const StyledButton = styled.button<StyledProps>`
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
  name,
  isActive,
  onClick,
  animType = "opacity",
}) => {
  return (
    <StyledButton
      onClick={onClick}
      animType={animType}
      isActive={isActive}
      aria-label={name}
    >
      {icon}
    </StyledButton>
  );
};

export default ActionButton;
