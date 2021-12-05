import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import { debounce } from 'lodash';
import { NavContainer, List, ListLink, LinkAnchor } from './Nav.styles';
import useScrollPosition from '../../hooks/useScrollPosition';

import { TIdArray } from '../../types/types';

type TNav = {
  ids: string[];
  offsetY: number;
};

const Nav = ({ ids, offsetY }: TNav) => {
  const [isSticked, setIsSticked] = useState(false);
  const [navPosition, setNavPosition] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  const handleResize = () => {
    if (navRef.current) {
      setNavPosition(navRef.current.offsetTop);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', debounce(handleResize, 1000));

    return () => window.removeEventListener('resize', debounce(handleResize, 1000));
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
          <LinkAnchor href={`#${ids[0]}`} title="home page">
            <AiOutlineHome />
          </LinkAnchor>
        </ListLink>
        <ListLink>
          <LinkAnchor href={`#${ids[1]}`} title="about our firma">
            <AiOutlineUser />
          </LinkAnchor>
        </ListLink>
        <ListLink>
          <LinkAnchor href={`#${ids[2]}`} title="test">
            <AiOutlinePhone />
          </LinkAnchor>
        </ListLink>
      </List>
    </NavContainer>
  );
};

export default Nav;
