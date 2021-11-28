import React, { useEffect, useState, useRef } from "react";
import {
  AiOutlineHome,
  AiOutlineAccountBook,
  AiOutlineAreaChart,
} from "react-icons/ai";
import { NavContainer, List, ListLink } from "./Nav.styles";
import useScrollPosition from "../../hooks/useScrollPosition";

const Nav: React.FC = function () {
  const [isSticked, setIsSticked] = useState(false);
  const [navPosition, setNavPosition] = useState(0);
  const { offsetY } = useScrollPosition();
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (navRef.current) {
      setNavPosition(navRef.current.offsetTop);
    }
  }, []);
  useEffect(() => {
    if (navPosition !== 0) {
      if (offsetY >= navPosition - 10) {
        setIsSticked(true);
      } else {
        setIsSticked(false);
      }
    }
  }, [offsetY]);
  return (
    <NavContainer ref={navRef} isSticked={isSticked}>
      <List>
        <ListLink>
          <a href="#header">
            <AiOutlineHome />
          </a>
        </ListLink>
        <ListLink>
          <a href="#header">
            <AiOutlineAccountBook />
          </a>
        </ListLink>
        <ListLink>
          <a href="#test">
            <AiOutlineAreaChart />
          </a>
        </ListLink>
      </List>
    </NavContainer>
  );
};

export default Nav;
