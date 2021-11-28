import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        cursor: none;
    }
    body{
        background-color: ${({ theme }) => theme.yellow};
        min-height: 100vh;
        font-family: 'Merriweather', serif;
    }
`;

export default GlobalStyle;
