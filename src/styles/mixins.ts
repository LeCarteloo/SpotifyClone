import { css } from "styled-components";

const mixins = {
  buttonAdd: css`
    div {
      color: var(--text-press);
      background-color: var(--background-subdued);
      border-radius: var(--radius-small);
      padding: 0.15em;
      display: flex;
    }
  `,
  buttonLiked: css`
    div {
      color: var(--text-subdued);
      background: linear-gradient(135deg, #450af5, #c4efd9);
      border-radius: var(--radius-small);
      padding: 0.15em;
      display: flex;
    }
  `,
  opacityHover: css`
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
    &:hover,
    &:focus-within {
      opacity: 1;
    }
  `,
  scaleHover: css`
    transform: scale(1);
    transition: transform 0.1s ease-in-out;
    &:hover,
    &:focus-within {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  `,
  buttonActive: css`
    color: var(--text-bright-accent);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      display: block;
      border-radius: 50%;
      background-color: var(--text-bright-accent);
      width: 4px;
      height: 4px;
      left: 50%;
      transform: translateX(-50%);
    }
  `,
};

export default mixins;
