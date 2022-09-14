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
};

export default mixins;
