import { Anchor } from './Link.styles';
import { useCursorContext } from '../../contexts/CursorContext';
import { Link as LinkProps } from '../../types/types';

const Link = ({ href, target, rel, children }: LinkProps) => {
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
