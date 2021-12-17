import { Container } from './ContactSection.styles';
import loadable from '@loadable/component';
import { Map } from '../Map/Map';
import { ContactLinks } from '../ContactLinks/ContactLinks';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { TypeId } from '../../Types/types';

const ContactSection = ({ id }: TypeId) => {
  return (
    <Container id={id}>
      <SectionLabel labelText="contact me" />
      <ContactLinks />
      <Map />
    </Container>
  );
};

export { ContactSection };
