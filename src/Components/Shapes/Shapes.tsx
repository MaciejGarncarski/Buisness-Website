import { TriangleContainer, RectangleContainer, CircleContainer } from './Shape.styles';
import { ImgFill } from '../ImgFill/ImgFill';
import triangle from '../../Assets/Header/triangle.svg';
import circle from '../../Assets/Header/circle.svg';
import rectangle from '../../Assets/Header/rectangle.svg';

import { Multiply } from '../../Types/types';

const Triangle = function ({ multiply }: Multiply) {
  return (
    <TriangleContainer
      style={{
        transform: `translate3d(0, ${multiply + 0.1}px, 0)`,
      }}
    >
      <ImgFill src={triangle} alt="Triangle decoration" />
    </TriangleContainer>
  );
};

const Rectangle = function ({ multiply }: Multiply) {
  return (
    <RectangleContainer
      style={{
        transform: `translate3d(0, ${multiply - 0.1}px, 0)`,
      }}
    >
      <ImgFill src={rectangle} alt="Rectangle decoration" />
    </RectangleContainer>
  );
};

const Circle = function ({ multiply }: Multiply) {
  return (
    <CircleContainer style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
      <ImgFill src={circle} alt="Circle decoration" />
    </CircleContainer>
  );
};

export { Triangle, Rectangle, Circle };
