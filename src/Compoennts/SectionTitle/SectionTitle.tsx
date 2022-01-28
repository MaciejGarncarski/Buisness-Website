import { variant } from '../../Assets/animations/sectiontitle';

import { Heading } from './SectionTitle.styles';

type Label = {
  labelText: string;
};

const SectionTitle = ({ labelText }: Label) => {
  return (
    <Heading variants={variant} initial="hidden" whileInView="visible">
      {labelText}.
    </Heading>
  );
};

export { SectionTitle };
