import { useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { isMobile as isMobileDevice } from 'react-device-detect';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './StyledComponents/GlobalStyle';
import { Theme } from './StyledComponents/Theme';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Cursor } from './components/Cursor/Cursor';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Separator } from './components/Separator/Separator';
import { CursorProvider } from './contexts/CursorContext';
import { useMobileContext } from './contexts/MobileContext';
import { useScrollPosition } from './hooks/useScrollPosition';

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
export { App };
