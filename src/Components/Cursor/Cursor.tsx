import React, { useRef, useEffect, useState } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { PrimaryCursor, SecondaryCursor } from './Cursor.styles';
import useReducedMotion from '../../hooks/useReducedMotion';

// TODO: REFACTOR THIS SHIT :)

const Cursor = function () {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const all = document.querySelectorAll('a');
    all.forEach((el) => {
      el.addEventListener('mouseover', () => setIsActive(true));
      el.addEventListener('mouseleave', () => setIsActive(false));
    });
    return () => {
      all.forEach((el) => {
        el.removeEventListener('mouseover', () => setIsActive(true));
        el.removeEventListener('mouseleave', () => setIsActive(false));
      });
    };
  }, []);

  const { x, y } = useMousePosition();
  const primaryCursor = useRef<HTMLDivElement>(null);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    if (primaryCursor.current !== null && secondaryCursor.current !== null) {
      positionRef.current.mouseX = x - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY = y - secondaryCursor.current.clientHeight / 2;
      primaryCursor.current.style.transform = `translate3d(${
        x - primaryCursor.current.clientWidth / 2
      }px, ${y - primaryCursor.current.clientHeight / 2}px, 0)`;
    }
  }, [x, y]);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
        positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.085;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.085;
        if (
          Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor.current !== null) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    followMouse();
  }, []);

  return (
    <div>
      <PrimaryCursor ref={primaryCursor} className={isActive ? 'active' : ''} />
      <SecondaryCursor ref={secondaryCursor} className={isActive ? 'active' : ''} />
    </div>
  );
};

export default Cursor;
