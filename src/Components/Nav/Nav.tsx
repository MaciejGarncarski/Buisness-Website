import { useEffect, useState, useRef } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone, AiOutlineCamera } from 'react-icons/ai';
import { NavContainer, List, ListLink as ListLinkStyle, LinkAnchor } from './Nav.styles';
import { useCursorContext } from '../../Contexts/CursorContext';
import { isMobile } from 'react-device-detect';
import { TChildren, TNav } from '../../Types/types';

const ListLink = ({ children }: TChildren) => {
  const { setIsActive } = useCursorContext();
  return (
    <ListLinkStyle onMouseOver={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      {children}
    </ListLinkStyle>
  );
};

const Nav = ({ ids, offsetY }: TNav) => {
  const [isSticked, setIsSticked] = useState(false);
  const [navPosition, setNavPosition] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        setNavPosition(navRef.current.offsetTop);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (offsetY >= navPosition) {
      setIsSticked(true);
    } else {
      setIsSticked(false);
    }
  }, [navPosition, offsetY]);

  return (
    <NavContainer ref={navRef} isSticked={isSticked}>
      <List>
        <ListLink>
          <LinkAnchor href={`#${ids[0]}`} title="Header">
            <AiOutlineHome />
          </LinkAnchor>
        </ListLink>
        <ListLink>
          <LinkAnchor href={`#${ids[1]}`} title="About us">
            <AiOutlineUser />
          </LinkAnchor>
        </ListLink>
        {!isMobile && (
          <ListLink>
            <LinkAnchor href={`#${ids[2]}`} title="Gallery">
              <AiOutlineCamera />
            </LinkAnchor>
          </ListLink>
        )}

        <ListLink>
          <LinkAnchor href={`#${ids[3]}`} title="Contact">
            <AiOutlinePhone />
          </LinkAnchor>
        </ListLink>
      </List>
    </NavContainer>
  );
};

export { Nav };
