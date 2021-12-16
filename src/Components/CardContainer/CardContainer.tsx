import TiltContainer from './CardContainer.styles';
import useReducedMotion from '../../Hooks/useReducedMotion';

import { TCardContainer } from '../../Types/types';

const CardTilt = ({ children, bg, border }: TCardContainer) => {
  const usesReducedMotion = useReducedMotion();
  let tiltY = 0;
  let tiltX = 0;
  if (!usesReducedMotion) {
    tiltY = 2;
    tiltX = 4;
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
