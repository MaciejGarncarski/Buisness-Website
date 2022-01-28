import loadable from '@loadable/component';
import { useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { useMobileContext } from '../../Contexts/MobileContext';
import { heading, description } from '../../Data/header';
import { Offset, Anchor } from '../../Types/types';

import { HeaderContainer, H1, Description } from './Header.styles';

const Triangle = loadable(async () => {
  const { Triangle } = await import('./Shapes/Shapes');
  return Triangle;
});

const Rectangle = loadable(async () => {
  const { Rectangle } = await import('./Shapes/Shapes');
  return Rectangle;
});

const Circle = loadable(async () => {
  const { Circle } = await import('./Shapes/Shapes');
  return Circle;
});

type Header = Offset & Anchor;

const Header = ({ id, offsetY }: Header) => {
  const usesReducedMotion = useReducedMotion();
  const { isMobile } = useMobileContext();

  const [multiply, setMultiply] = useState(0);

  useEffect(() => {
    if (isMobile && !usesReducedMotion) {
      setMultiply(Math.floor(offsetY * 0.2));
    } else if (!isMobile && !usesReducedMotion) {
      setMultiply(Math.floor(offsetY * 0.45));
    }
  }, [isMobile, offsetY, usesReducedMotion]);

  return (
    <HeaderContainer id={id}>
      <H1 style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>{heading}</H1>
      <Description style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
        {description}
      </Description>
      <Triangle multiply={multiply} />
      <Rectangle multiply={multiply} />
      <Circle multiply={multiply} />
    </HeaderContainer>
  );
};

export { Header };
