import debounce from 'lodash.debounce';
import { useEffect, useState, useRef } from 'react';

import { data } from '../../data/nav';
import { Nav as NavTypes } from '../../types/types';

import { NavContainer, List } from './Nav.styles';
import { NavLink } from './NavLink/NavLink';

const Nav = ({ ids, offsetY }: NavTypes) => {
  const [isSticked, setIsSticked] = useState(false);
  const [navPosition, setNavPosition] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const setDefaultPos = () => {
      if (navRef.current) {
        setNavPosition(window.innerHeight);
      }
    };
    setDefaultPos();
    window.addEventListener(
      'resize',
      debounce(() => setDefaultPos, 500),
    );
    return () => window.removeEventListener('resize', setDefaultPos);
  }, []);

  useEffect(() => {
    offsetY >= navPosition - 50 ? setIsSticked(true) : setIsSticked(false);
  }, [navPosition, offsetY]);

  return (
    <NavContainer ref={navRef} isSticked={isSticked}>
      <List>
        {data.map(({ title, Icon }, idx) => {
          return (
            <NavLink key={idx} href={`#${ids[idx]}`} title={title}>
              <Icon />
            </NavLink>
          );
        })}
      </List>
    </NavContainer>
  );
};

export { Nav };
