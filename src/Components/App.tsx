import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../StyledComponents/GlobalStyle';
import { Theme } from '../StyledComponents/Theme';
import { CursorProvider } from '../contexts/CursorContext';
import { isMobile } from 'react-device-detect';
import { useReducedMotion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';
import loadable from '@loadable/component';
import { Contact } from './Contact/Contact';
import { About } from './About/About';

const Cursor = loadable(async () => {
  const { Cursor } = await import('./Cursor/Cursor');
  return Cursor;
});

const Header = loadable(async () => {
  const { Header } = await import('./Header/Header');
  return Header;
});

const Nav = loadable(async () => {
  const { Nav } = await import('./Nav/Nav');
  return Nav;
});

const Separator = loadable(async () => {
  const { Separator } = await import('./Separator/Separator');
  return Separator;
});

const Gallery = loadable(async () => {
  const { Gallery } = await import('./Gallery/Gallery');
  return Gallery;
});

const Footer = loadable(async () => {
  const { Footer } = await import('./Footer/Footer');
  return Footer;
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
`;

const anchor = ['', 'about', 'gallery', 'contact'];

const App = function () {
  const offsetY = useScrollPosition();
  const usesReducedMotion = useReducedMotion();
  return (
    <CursorProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {!isMobile && !usesReducedMotion && <Cursor />}
        <Container>
          <Header offsetY={offsetY} />
          <Nav ids={anchor} offsetY={offsetY} />
          <About id={anchor[1]} />
          <Separator />
          <Gallery id={anchor[2]} />
          <Separator />
          <Contact id={anchor[3]} />
          <Footer />
        </Container>
      </ThemeProvider>
    </CursorProvider>
  );
};

export type ThemeType = typeof Theme;
export default App;
