import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './StyledComponents/GlobalStyle';
import { Theme } from './StyledComponents/Theme';
import { CursorProvider } from './contexts/CursorContext';
import { useMobileContext } from './contexts/MobileContext';
import { useReducedMotion } from 'framer-motion';
import { useScrollPosition } from './hooks/useScrollPosition';
import loadable from '@loadable/component';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { isMobile as isMobileDevice } from 'react-device-detect';
import { useEffect } from 'react';
import debounce from 'lodash.debounce';

const Cursor = loadable(async () => {
  const { Cursor } = await import('./components/Cursor/Cursor');
  return Cursor;
});

const Header = loadable(async () => {
  const { Header } = await import('./components/Header/Header');
  return Header;
});

const Nav = loadable(async () => {
  const { Nav } = await import('./components/Nav/Nav');
  return Nav;
});

const Separator = loadable(async () => {
  const { Separator } = await import('./components/Separator/Separator');
  return Separator;
});

const Gallery = loadable(async () => {
  const { Gallery } = await import('./components/Gallery/Gallery');
  return Gallery;
});

const Footer = loadable(async () => {
  const { Footer } = await import('./components/Footer/Footer');
  return Footer;
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2em;
  font-size: clamp(0.7rem, 2vw, 1.1rem);
`;

const anchor = ['', 'about', 'gallery', 'contact'];

const App = function () {
  const { isMobile, setIsMobile } = useMobileContext();

  useEffect(() => {
    setIsMobile(isMobileDevice);
    return () => setIsMobile(false);
  }, [setIsMobile]);

  const offsetY = useScrollPosition();
  const usesReducedMotion = useReducedMotion();
  return (
    <ThemeProvider theme={Theme}>
      <CursorProvider>
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
      </CursorProvider>
    </ThemeProvider>
  );
};

export type ThemeType = typeof Theme;
export default App;
