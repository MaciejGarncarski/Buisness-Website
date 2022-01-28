import loadable from '@loadable/component';
import { useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { isMobile as isMobileDevice } from 'react-device-detect';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './StyledComponents/GlobalStyle';
import { Theme } from './StyledComponents/Theme';
import { About } from './Compoennts/About/About';
import { Cursor } from './Compoennts/Cursor/Cursor';
import { Header } from './Compoennts/Header/Header';
import { Nav } from './Compoennts/Nav/Nav';
import { Separator } from './Compoennts/Separator/Separator';
import { CursorProvider } from './Contexts/CursorContext';
import { useMobileContext } from './Contexts/MobileContext';
import { useScrollPosition } from './Hooks/useScrollPosition';

const Footer = loadable(async () => {
  const { Footer } = await import('./Compoennts/Footer/Footer');
  return Footer;
});

const Contact = loadable(async () => {
  const { Contact } = await import('./Compoennts/Contact/Contact');
  return Contact;
});

const Gallery = loadable(async () => {
  const { Gallery } = await import('./Compoennts/Gallery/Gallery');
  return Gallery;
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

const App = () => {
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
export { App };
