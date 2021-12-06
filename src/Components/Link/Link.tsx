import React from 'react';
import Anchor from './Link.styles';
import { useCursorContext } from '../../context/cursorHoverContext';
import { TLink } from '../../types/types';

const Link = ({ href, target, rel, children }: TLink) => {
  const cursorHoverState = useCursorContext();
  return (
    <Anchor
      href={href}
      target={target}
      rel={rel}
      onMouseOver={() => cursorHoverState.dispatch({ type: 'active' })}
      onMouseLeave={() => cursorHoverState.dispatch({ type: 'static' })}
    >
      {children}
    </Anchor>
  );
};

export default Link;
