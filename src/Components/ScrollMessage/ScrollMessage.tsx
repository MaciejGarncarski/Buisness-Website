import React from 'react';
import Message from './ScrollMessage.styles';

import { TMultiply } from '../../types/types';

const ScrollMessage = function ({ multiply }: TMultiply) {
  return (
    <Message style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
      scroll down
      <br />
      for more
    </Message>
  );
};

export default ScrollMessage;
