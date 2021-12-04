import { createGlobalStyle } from 'styled-components';
import SwiperStyles from './Swpier.styles';
import LeafletStyles from './Leaflet.styles';
const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
        scroll-padding-top: 8em;
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
    ::-webkit-scrollbar{
        background: ${({ theme }) => theme.darkYellow};
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.green};
        border: 4px solid ${({ theme }) => theme.black};
        transition: background-color 2s ease-in-out;
        &:hover{
            background-color: ${({ theme }) => theme.blue};
        }
    }
    ${SwiperStyles};
    ${LeafletStyles};
`;

export default GlobalStyle;
