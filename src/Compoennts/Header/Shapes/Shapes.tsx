import circle from '../../../Assets/images/header/circle.svg';
import rectangle from '../../../Assets/images/header/rectangle.svg';
import triangle from '../../../Assets/images/header/triangle.svg';
import { Multiply } from '../../../Types/types';
import { ImgFill } from '../../ImgFill/ImgFill.styles';

import { TriangleContainer, RectangleContainer, CircleContainer } from './Shape.styles';

const Triangle = ({ multiply }: Multiply) => {
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

const Rectangle = ({ multiply }: Multiply) => {
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

const Circle = ({ multiply }: Multiply) => {
  return (
    <CircleContainer style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
      <ImgFill src={circle} alt="Circle decoration" />
    </CircleContainer>
  );
};

export { Triangle, Rectangle, Circle };
