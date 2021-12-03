import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { isMobile } from 'react-device-detect';
import Theme from './styledcomponets/Theme';
import GlobalStyle from './styledcomponets/GlobalStyle';
import Nav from './Nav/Nav';
import Cursor from './Cursor/Cursor';
import Header from './Header/Header';
import About from './AboutSection/AboutSection';
import Footer from './Footer/Footer';
import ContactSection from './ContactSection/ContactSection';
import useReducedMotion from '../hooks/useReducedMotion';

type ThemeType = typeof Theme;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13em;
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
        <GlobalStyle />
        <Header id={linkIDs[0]} />
        <Nav ids={linkIDs} />
        <About id={linkIDs[1]} />
        <ContactSection id={linkIDs[2]} />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export type { ThemeType };
export default App;
