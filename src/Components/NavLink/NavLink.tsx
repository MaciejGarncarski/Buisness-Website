import { useCursorContext } from '../../Contexts/CursorContext';
import { Children, NavLink as NavLinkProps } from '../../Types/types';
import { LinkAnchor, ListLink as StyledLink } from './NavLink.style';

const NavLink = ({ children, href, title }: Children & NavLinkProps) => {
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
