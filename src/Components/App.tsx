import styled, { ThemeProvider } from 'styled-components';
import loadable from '@loadable/component';
import { isMobile } from 'react-device-detect';
import Theme from './styledcomponets/Theme';
import GlobalStyle from './styledcomponets/GlobalStyle';
import ContactSection from './ContactSection/ContactSection';
import Separator from '../Components/Separator/Separator';
import useReducedMotion from '../Hooks/useReducedMotion';
import CardSection from './CardSection/CardSection';
import useScrollPosition from '../Hooks/useScrollPosition';
import { CursorProvider } from '../Contexts/CursorContext';

const Nav = loadable(() => import('./Nav/Nav'));
const HeaderSection = loadable(() => import('./HeaderSection/HeaderSection'));
const Cursor = loadable(() => import('./Cursor/Cursor'));
const Footer = loadable(() => import('./Footer/Footer'));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
`;

const linkIDs = ['home', 'about', 'contact'];

const App = function () {
  const offsetY = useScrollPosition();
  const usesReducedMotion = useReducedMotion();
  return (
    <CursorProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {!isMobile && !usesReducedMotion && <Cursor />}
        <Container>
          <HeaderSection id={linkIDs[0]} offsetY={offsetY} />
          <Nav ids={linkIDs} offsetY={offsetY} />
          <CardSection id={linkIDs[1]} />
          <Separator />
          <ContactSection id={linkIDs[2]} />
          <Footer />
        </Container>
      </ThemeProvider>
    </CursorProvider>
  );
};

export type ThemeType = typeof Theme;
export default App;
