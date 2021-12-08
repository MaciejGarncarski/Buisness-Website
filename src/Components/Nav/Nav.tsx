import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { debounce } from 'lodash';
import { NavContainer, List, ListLink as ListLinkStyle, LinkAnchor } from './Nav.styles';
import { useCursorContext } from '../../Contexts/CursorContext';

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
    window.addEventListener('resize', debounce(handleResize, 500));

    return () => window.removeEventListener('resize', debounce(handleResize, 500));
  }, []);

  useEffect(() => {
    if (offsetY >= navPosition - 50) {
      setIsSticked(true);
    } else {
      setIsSticked(false);
    }
  }, [navPosition, offsetY]);

  return (
    <NavContainer
      ref={navRef}
      isSticked={isSticked}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
        <ListLink>
          <LinkAnchor href={`#${ids[2]}`} title="Contact">
            <AiOutlinePhone />
          </LinkAnchor>
        </ListLink>
      </List>
    </NavContainer>
  );
};

export default Nav;
