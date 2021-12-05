import React from 'react';
import Anchor from './Link.styles';

import { TLink } from '../../types/types';

const Link = ({ href, target, rel, children }: TLink) => {
  return (
    <Anchor href={href} target={target} rel={rel}>
      {children}
    </Anchor>
  );
};

export default Link;
