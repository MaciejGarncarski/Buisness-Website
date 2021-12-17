import { TiltContainer } from './CardContainer.styles';
import { useReducedMotion } from '../../Hooks/useReducedMotion';
import { TCardContainer } from '../../Types/types';
import { Card } from '../CardContent/CardContent';

const CardTilt = ({ bg, border, label, heading, icon, description }: TCardContainer) => {
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
      <Card label={label} heading={heading} icon={icon} description={description} />
    </TiltContainer>
  );
};

export { CardTilt };
