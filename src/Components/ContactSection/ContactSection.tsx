import React from 'react';
import Container from './ContactSection.styles';
import loadable from '@loadable/component';
import Map from '../Map/Map';
const ContactLinks = loadable(() => import('../ContactLinks/ContactLinks'));

import { TypeId } from '../../types/types';

const ContactSection = ({ id }: TypeId) => {
  return (
    <Container id={id}>
      <ContactLinks />
      <Map />
    </Container>
  );
};

export default ContactSection;
