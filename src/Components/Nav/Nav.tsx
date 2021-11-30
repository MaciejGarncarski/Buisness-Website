import React, { useEffect, useState, useRef } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { debounce } from "lodash";
import { NavContainer, List, ListLink } from "./Nav.styles";
import useScrollPosition from "../../hooks/useScrollPosition";

const Nav: React.FC = function () {
  const [isSticked, setIsSticked] = useState(false);
  const [navPosition, setNavPosition] = useState(0);
  const { offsetY } = useScrollPosition();
  const navRef = useRef<HTMLElement>(null);

  const handleResize = () => {
    if (navRef.current) {
      setNavPosition(navRef.current.offsetTop);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", debounce(handleResize, 1000), {
      passive: true,
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (navPosition !== 0) {
      if (offsetY >= navPosition - 50) {
        setIsSticked(true);
      } else {
        setIsSticked(false);
      }
    }
  }, [offsetY]);

  return (
    <NavContainer ref={navRef} isSticked={isSticked}>
      <List>
        <a href="#header">
          <ListLink>
            <AiOutlineHome />
          </ListLink>
        </a>
        <a href="#about">
          <ListLink>
            <AiOutlineUser />
          </ListLink>
        </a>
        <a href="#test">
          <ListLink>
            <AiOutlinePhone />
          </ListLink>
        </a>
      </List>
    </NavContainer>
  );
};

export default Nav;
