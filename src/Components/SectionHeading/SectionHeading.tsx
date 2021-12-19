import { Heading } from './SectionHeading.styles';
import { Label } from '../../Types/types';

const variant = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const SectionHeading = ({ labelText }: Label) => {
  return (
    <Heading variants={variant} initial="hidden" whileInView="visible">
      {labelText}.
    </Heading>
  );
};

export { SectionHeading };
