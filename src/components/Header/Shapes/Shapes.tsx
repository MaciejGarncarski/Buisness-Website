import { TriangleContainer, RectangleContainer, CircleContainer } from './Shape.styles';
import { ImgFill } from '../../ImgFill/ImgFill.styles';
import triangle from '../../../assets/images/header/triangle.svg';
import circle from '../../../assets/images/header/circle.svg';
import rectangle from '../../../assets/images/header/rectangle.svg';
import { Multiply } from '../../../types/types';

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
