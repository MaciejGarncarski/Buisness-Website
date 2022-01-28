import { useEffect, useState, useRef } from 'react';

import { data } from '../../Data/nav';
import { AnchorArray, Offset } from '../../Types/types';

import { NavContainer, List } from './Nav.styles';
import { NavLink } from './NavLink/NavLink';

type NavTypes = AnchorArray & Offset;

const Nav = ({ ids, offsetY }: NavTypes) => {
  const [isSticked, setIsSticked] = useState(false);
  const [navPosition, setNavPosition] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const setDefaultPos = () => {
      if (navRef.current) {
        setNavPosition(window.innerHeight - navRef.current.offsetHeight);
      }
    };
    setDefaultPos();
    window.addEventListener('resize', setDefaultPos);
    return () => window.removeEventListener('resize', setDefaultPos);
  }, [navPosition]);

  useEffect(() => {
    offsetY >= navPosition ? setIsSticked(true) : setIsSticked(false);
  }, [navPosition, offsetY]);

  return (
    <NavContainer ref={navRef} className={isSticked ? 'sticked' : 'static'}>
      <List>
        {data.map(({ title, Icon }, i) => {
          return (
            <NavLink key={title} href={`#${ids[i]}`} title={title}>
              <Icon />
            </NavLink>
          );
        })}
      </List>
    </NavContainer>
  );
};

export { Nav };
