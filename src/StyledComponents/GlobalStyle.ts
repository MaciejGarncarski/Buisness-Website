import { createGlobalStyle } from 'styled-components';
import { ScrollBar } from './Scrollbar.style';
import { SwiperStyles } from './Swpier.styles';
import { LeafletStyles } from './Leaflet.styles';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        cursor: none;
        @media (prefers-reduced-motion) {
            cursor: auto;
        }
    }

    html{
        scroll-behavior: smooth;
        scroll-padding: 3em;
        @media screen and (min-width: ${({ theme }) => theme.bigScreen}) {
            scroll-padding: 5em;
        }
    }
    body{
        background-color: ${({ theme }) => theme.yellow};
        min-height: 100vh;
        min-height: -webkit-fill-available;
        font-family: 'Roboto Slab', serif;
    }
    ${SwiperStyles};
    ${ScrollBar}
    ${LeafletStyles};
`;

export { GlobalStyle };