import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
        scroll-padding: 10em;
    }
    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        cursor: none;
        @media (prefers-reduced-motion) {
            cursor: auto;
        }
    }
    body{
        background-color: ${({ theme }) => theme.yellow};
        min-height: 100vh;
        font-family: 'Merriweather', serif;
    }
    :root{
        --swiper-theme-color: ${({ theme }) => theme.black};
        --swiper-navigation-size: 3em;

    }
    .swiper {
        width: 100%;
        height: 100%;
        padding: 3em 0;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ::-webkit-scrollbar{
        background: ${({ theme }) => theme.darkYellow};
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.green};
        border: 2.5px solid ${({ theme }) => theme.black};
        transition: background-color 2s ease-in-out;
        &:hover{
            background-color: ${({ theme }) => theme.blue};
        }
    }
`;

export default GlobalStyle;
