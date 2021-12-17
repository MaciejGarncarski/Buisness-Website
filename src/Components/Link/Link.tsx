import { Anchor } from './Link.styles';
import { useCursorContext } from '../../Contexts/CursorContext';
import { TLink } from '../../Types/types';

const Link = ({ href, target, rel, children }: TLink) => {
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
