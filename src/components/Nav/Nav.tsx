import { useEffect, useState, useRef } from 'react';
import { NavContainer, List } from './Nav.styles';
import { Nav as NavTypes } from '../../types/types';
import { data } from '../../data/nav';
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
    window.addEventListener('resize', setDefaultPos);
    return () => window.removeEventListener('resize', setDefaultPos);
  }, []);

  useEffect(() => {
    offsetY >= navPosition - 100 ? setIsSticked(true) : setIsSticked(false);
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
