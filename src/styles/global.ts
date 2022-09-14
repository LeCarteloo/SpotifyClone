import variables from "./variables";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    ${variables};

    * {
        margin: 0;
        padding: 0;
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
    }
`;
