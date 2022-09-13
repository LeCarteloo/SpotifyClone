import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../App";

export default createGlobalStyle<{ theme: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
    }
    #root {
        margin: 0 auto;
    }
    h1 {
        background-color: red;
    }
`;
