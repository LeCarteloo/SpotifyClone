import variables from "./variables";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    ${variables};

    * {
        margin: 0;
        padding: 0;
        @supports (scrollbar-width: thin) {
        scrollbar-width: thin;
        scrollbar-color: var(--essential-bright-accent) transparent;
      }
      &::-webkit-scrollbar {
        border-radius: 10px;
        width: 7px;
      }
      &::-webkit-scrollbar-button {
        height: 0;
        width: 0;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--essential-bright-accent);
        border-radius: 10px;
      }
    }
    html {
        height: 100%;
    }

    body {
        height: 100%;
        background-color: var(--background-base);
        color: var(--text-base);
        overflow-x: hidden;
    }

    #root {
        margin: 0 auto;
        height: 100%;
      }

    button {
        color: var(--text-base);
        font-size: 1em;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
`;
