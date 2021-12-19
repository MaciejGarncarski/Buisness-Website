import { Container } from './ContactSection.styles';
import { Map } from '../Map/Map';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Anchor } from '../../Types/types';
import loadable from '@loadable/component';

const ContactLinks = loadable(async () => {
  const { ContactLinks } = await import('../ContactLinks/ContactLinks');
  return ContactLinks;
});

const ContactSection = ({ id }: Anchor) => {
  return (
    <Container id={id}>
      <SectionHeading labelText="contact me" />
      <ContactLinks />
      <Map />
    </Container>
  );
};

export { ContactSection };
