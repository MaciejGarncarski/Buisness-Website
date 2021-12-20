import { Heading } from './SectionTitle.styles';
import { Label } from '../../types/types';
import { variant } from '../../assets/animations/sectiontitle';

const SectionTitle = ({ labelText }: Label) => {
  return (
    <Heading variants={variant} initial="hidden" whileInView="visible">
      {labelText}.
    </Heading>
  );
};

export { SectionTitle };
