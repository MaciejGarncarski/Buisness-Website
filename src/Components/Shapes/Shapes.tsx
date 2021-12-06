import React from 'react';
import { TriangleContainer, RectangleContainer, CircleContainer } from './Shape.styles';
import ImgFullSize from '../ImgFullSize/ImgFullSize';
import triangle from '../../Assets/Header/triangle.svg';
import circle from '../../Assets/Header/circle.svg';
import rectangle from '../../Assets/Header/rectangle.svg';

import { TMultiply } from '../../types/types';

const Triangle = function ({ multiply }: TMultiply) {
  return (
    <TriangleContainer
      style={{
        transform: `translate3d(0, ${multiply + 0.1}px, 0)`,
      }}
    >
      <ImgFullSize src={triangle} alt="Triangle" />
    </TriangleContainer>
  );
};

const Rectangle = function ({ multiply }: TMultiply) {
  return (
    <RectangleContainer
      style={{
        transform: `translate3d(0, ${multiply - 0.1}px, 0)`,
      }}
    >
      <ImgFullSize src={rectangle} alt="Triangle" />
    </RectangleContainer>
  );
};

const Circle = function ({ multiply }: TMultiply) {
  return (
    <CircleContainer style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
      <ImgFullSize src={circle} alt="Triangle" />
    </CircleContainer>
  );
};

export { Triangle, Rectangle, Circle };
