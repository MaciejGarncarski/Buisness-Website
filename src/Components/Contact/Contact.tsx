import { Container } from './Contact.styles';
import { Map } from './Map/Map';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Anchor } from '../../types/types';
import loadable from '@loadable/component';

const ContactLinks = loadable(async () => {
  const { ContactLinks } = await import('./ContactLinks/ContactLinks');
  return ContactLinks;
});

const Contact = ({ id }: Anchor) => {
  return (
    <Container id={id}>
      <SectionTitle labelText="contact me" />
      <ContactLinks />
      <Map />
    </Container>
  );
};

export { Contact };
