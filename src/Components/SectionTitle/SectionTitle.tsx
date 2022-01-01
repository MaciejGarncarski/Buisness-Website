import { variant } from '../../assets/animations/sectiontitle';
import { Label } from '../../types/types';

import { Heading } from './SectionTitle.styles';

const SectionTitle = ({ labelText }: Label) => {
  return (
    <Heading variants={variant} initial="hidden" whileInView="visible">
      {labelText}.
    </Heading>
  );
};

export { SectionTitle };
