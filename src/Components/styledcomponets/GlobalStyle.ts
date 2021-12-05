import { createGlobalStyle } from 'styled-components';
import ScrollBar from './Scrollbar.style';
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
        font-family: 'Roboto Slab', serif;
    }
    ${SwiperStyles};
    ${ScrollBar}
    ${LeafletStyles};
`;

export default GlobalStyle;
