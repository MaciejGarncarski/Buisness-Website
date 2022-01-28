import { ReactNode } from 'react';

import { useCursorContext } from '../../Contexts/CursorContext';

import { Anchor } from './Link.styles';

type LinkTypes = {
  children: ReactNode;
  href: string;
  target: string;
  rel: string;
};

const Link = ({ href, target, rel, children }: LinkTypes) => {
  const { setIsActive } = useCursorContext();
  return (
    <Anchor
      href={href}
      target={target}
      rel={rel}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {children}
    </Anchor>
  );
};

export { Link };
