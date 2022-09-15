import styled, { css } from "styled-components";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import React from "react";

type LikeButtonProps = {
  isLiked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<LikeButtonProps>`
  ${({ theme }) => theme.mixins.opacityHover}
  color: var(--test-base);
  opacity: 0.7;
  transition: color 0.2s ease-in;

  ${({ isLiked }) =>
    isLiked &&
    css`
      color: var(--text-bright-accent);
      opacity: 1;
      @keyframes shake {
        25% {
          transform: translateX(5px);
        }
        50% {
          transform: rotate(15deg);
        }
        75% {
          transform: translateX(0px);
        }
        100% {
          transform: rotate(0deg);
        }
      }
      animation-name: shake;
      animation-duration: 0.3s;
    `}
`;

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onClick }) => {
  return (
    <StyledButton onClick={onClick} isLiked={isLiked}>
      {isLiked ? <FaHeart /> : <FaRegHeart />}
    </StyledButton>
  );
};

export default LikeButton;
