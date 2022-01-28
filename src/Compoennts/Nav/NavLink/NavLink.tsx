import { useCursorContext } from '../../../Contexts/CursorContext';
import { Children } from '../../../Types/types';

import { LinkAnchor, ListLink as StyledLink } from './NavLink.style';

interface NavLinkTypes {
  href: string;
  title: string;
}

const NavLink = ({ children, href, title }: Children & NavLinkTypes) => {
  const { setIsActive } = useCursorContext();
  return (
    <StyledLink onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      <LinkAnchor href={href} title={title}>
        {children}
      </LinkAnchor>
    </StyledLink>
  );
};

export { NavLink };
