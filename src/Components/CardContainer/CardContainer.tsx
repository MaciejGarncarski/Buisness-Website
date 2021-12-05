import React from 'react';
import { isMobile } from 'react-device-detect';
import TiltContainer from './CardContainer.styles';
import useReducedMotion from '../../hooks/useReducedMotion';

import { TCardContainer } from '../../types/types';

const CardTilt = function ({ children, bg, border }: TCardContainer) {
  const usesReducedMotion = useReducedMotion();
  let tiltY = 0;
  let tiltX = 0;
  if (!usesReducedMotion) {
    tiltY = 3;
    tiltX = 5;
  }
  return (
    <TiltContainer
      perspective={500}
      tiltMaxAngleY={tiltY}
      tiltMaxAngleX={tiltX}
      bg={bg}
      border={border}
    >
      {children}
    </TiltContainer>
  );
};

export default CardTilt;
