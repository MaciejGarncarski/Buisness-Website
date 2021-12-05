import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { isMobile } from 'react-device-detect';
import Theme from './styledcomponets/Theme';
import GlobalStyle from './styledcomponets/GlobalStyle';
import Cursor from './Cursor/Cursor';
import Header from './Header/Header';
import About from './AboutSection/AboutSection';
import Footer from './Footer/Footer';
import ContactSection from './ContactSection/ContactSection';
import Separator from '../Components/Separator/Separator';
import useReducedMotion from '../hooks/useReducedMotion';
type ThemeType = typeof Theme;
import loadable from '@loadable/component';
const Nav = loadable(() => import('./Nav/Nav'));

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: max(10vh, 9em);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  > nav {
    color: ${({ theme }) => theme.color};
  }
`;

const linkIDs = ['header', 'about', 'contact'];

const App = function () {
  const usesReducedMotion = useReducedMotion();
  return (
    <ThemeProvider theme={Theme}>
      {!isMobile && !usesReducedMotion && <Cursor />}
      <MainContainer>
        <Nav ids={linkIDs} />
        <GlobalStyle />
        <Header id={linkIDs[0]} />
        <About id={linkIDs[1]} />
        <Separator />
        <ContactSection id={linkIDs[2]} />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export type { ThemeType };
export default App;
