import { TriangleContainer, RectangleContainer, CircleContainer } from './Shape.styles';
import { Img } from '../ImgFullSize/ImgFullSize';
import triangle from '../../Assets/Header/triangle.svg';
import circle from '../../Assets/Header/circle.svg';
import rectangle from '../../Assets/Header/rectangle.svg';

import { TMultiply } from '../../Types/types';

const Triangle = function ({ multiply }: TMultiply) {
  return (
    <TriangleContainer
      style={{
        transform: `translate3d(0, ${multiply + 0.1}px, 0)`,
      }}
    >
      <Img src={triangle} alt="Triangle decoration" />
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
      <Img src={rectangle} alt="Rectangle decoration" />
    </RectangleContainer>
  );
};

const Circle = function ({ multiply }: TMultiply) {
  return (
    <CircleContainer style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
      <Img src={circle} alt="Circle decoration" />
    </CircleContainer>
  );
};

export { Triangle, Rectangle, Circle };
