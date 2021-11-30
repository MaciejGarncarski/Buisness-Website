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

    .trackOnWindow {
        transform-style: preserve-3d;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-button-prev, .swiper-button-next{
        color: ${({ theme }) => theme.black}
    }
`;

export default GlobalStyle;
