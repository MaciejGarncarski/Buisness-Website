import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { isMobile } from 'react-device-detect';
import loadable from '@loadable/component';
import Theme from './styledcomponets/Theme';
import GlobalStyle from './styledcomponets/GlobalStyle';
import ContactSection from './ContactSection/ContactSection';
import Separator from '../Components/Separator/Separator';
import useReducedMotion from '../hooks/useReducedMotion';
import CardSection from './CardSection/CardSection';
import useScrollPosition from '../hooks/useScrollPosition';

const Nav = loadable(() => import('./Nav/Nav'));
const Header = loadable(() => import('./Header/Header'));
const Cursor = loadable(() => import('./Cursor/Cursor'));
const Footer = loadable(() => import('./Footer/Footer'));

type ThemeType = typeof Theme;

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
  const offsetY = useScrollPosition();
  const usesReducedMotion = useReducedMotion();
  return (
    <ThemeProvider theme={Theme}>
      {!isMobile && !usesReducedMotion && <Cursor />}
      <MainContainer>
        <Nav ids={linkIDs} offsetY={offsetY} />
        <GlobalStyle />
        <Header id={linkIDs[0]} offsetY={offsetY} />
        <CardSection id={linkIDs[1]} />
        <Separator />
        <ContactSection id={linkIDs[2]} />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export type { ThemeType };
export default App;
