import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './StyledComponents/GlobalStyle';
import { Theme } from './StyledComponents/Theme';
import { CursorProvider } from '../Contexts/CursorContext';
import { isMobile } from 'react-device-detect';
import { useReducedMotion } from '../Hooks/useReducedMotion';
import { useScrollPosition } from '../Hooks/useScrollPosition';
import loadable from '@loadable/component';

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

const AboutSection = loadable(async () => {
  const { AboutSection } = await import('./AboutSection/AboutSection');
  return AboutSection;
});

const GallerySection = loadable(async () => {
  const { GallerySection } = await import('./GallerySection/GallerySection');
  return GallerySection;
});

const ContactSection = loadable(async () => {
  const { ContactSection } = await import('./ContactSection/ContactSection');
  return ContactSection;
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

const linkIDs = ['', 'about', 'gallery', 'contact'];

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
          <Nav ids={linkIDs} offsetY={offsetY} />
          <AboutSection id={linkIDs[1]} />
          <Separator />
          {!isMobile && <GallerySection id={linkIDs[2]} />}
          {!isMobile && <Separator />}
          <ContactSection id={linkIDs[3]} />
          <Footer />
        </Container>
      </ThemeProvider>
    </CursorProvider>
  );
};

export type ThemeType = typeof Theme;
export default App;
