import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { HeaderContainer, H1, Description } from './Header.styles';
import { Triangle, Rectangle, Circle } from '../Shapes/Shapes';
import useReducedMotion from '../../Hooks/useReducedMotion';
import { heading, description } from './Header.data';
import { TIdOffset } from '../../Types/types';

const Header = ({ id, offsetY }: TIdOffset) => {
  const usesReducedMotion = useReducedMotion();

  let multiply = 0;
  if (usesReducedMotion) {
    multiply = 0;
  } else if (isMobile && !usesReducedMotion) {
    multiply = Math.floor(offsetY * 0.2);
  } else if (!isMobile && !usesReducedMotion) {
    multiply = Math.floor(offsetY * 0.45);
  }

  return (
    <HeaderContainer id={id}>
      <H1 style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>{heading}</H1>
      <Triangle multiply={multiply} />
      <Rectangle multiply={multiply} />
      <Circle multiply={multiply} />
      <Description style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
        {description}
      </Description>
    </HeaderContainer>
  );
};

export default Header;
