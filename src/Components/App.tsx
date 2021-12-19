import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../StyledComponents/GlobalStyle';
import { Theme } from '../StyledComponents/Theme';
import { CursorProvider } from '../Contexts/CursorContext';
import { isMobile } from 'react-device-detect';
import { useReducedMotion } from 'framer-motion';
import { useScrollPosition } from '../Hooks/useScrollPosition';
import loadable from '@loadable/component';
import { ContactSection } from './ContactSection/ContactSection';
import { CardSection } from './CardSection/CardSection';

const Cursor = loadable(async () => {
  const { Cursor } = await import('./Cursor/Cursor');
  return Cursor;
});

const HeaderSection = loadable(async () => {
  const { HeaderSection } = await import('./HeaderSection/HeaderSection');
  return HeaderSection;
});

const Nav = loadable(async () => {
  const { Nav } = await import('./Nav/Nav');
  return Nav;
});

const Separator = loadable(async () => {
  const { Separator } = await import('./Separator/Separator');
  return Separator;
});

const GallerySection = loadable(async () => {
  const { GallerySection } = await import('./GallerySection/GallerySection');
  return GallerySection;
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
          <HeaderSection offsetY={offsetY} />
          <Nav ids={anchor} offsetY={offsetY} />
          <CardSection id={anchor[1]} />
          <Separator />
          <GallerySection id={anchor[2]} />
          <Separator />
          <ContactSection id={anchor[3]} />
          <Footer />
        </Container>
      </ThemeProvider>
    </CursorProvider>
  );
};

export type ThemeType = typeof Theme;
export default App;
