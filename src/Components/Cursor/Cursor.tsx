import React, { useRef, useEffect, useState } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { PrimaryCursor, SecondaryCursor } from './Cursor.styles';
import { useCursorContext } from '../../context/cursorHoverContext';

const Cursor = function () {
  const cursorHoverState = useCursorContext();
  const { clientX, clientY } = useMousePosition();
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

  const position = positionRef.current;

  useEffect(() => {
    if (primaryCursor.current && secondaryCursor.current) {
      position.mouseX = clientX - secondaryCursor.current.clientWidth / 2;
      position.mouseY = clientY - secondaryCursor.current.clientHeight / 2;

      primaryCursor.current.style.transform = `translate3d(${
        clientX - primaryCursor.current.clientWidth / 2
      }px, ${clientY - primaryCursor.current.clientHeight / 2}px, 0)`;
    }
  }, [position, clientX, clientY]);

  useEffect(() => {
    const followMouse = () => {
      position.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = position;

      if (!destinationX || !destinationY) {
        position.destinationX = mouseX;
        position.destinationY = mouseY;
      } else {
        position.distanceX = (mouseX - destinationX) * 0.09;
        position.distanceY = (mouseY - destinationY) * 0.09;
        if (Math.abs(position.distanceX) + Math.abs(position.distanceY) < 0.1) {
          position.destinationX = mouseX;
          position.destinationY = mouseY;
        } else {
          position.destinationX += distanceX;
          position.destinationY += distanceY;
        }
      }

      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    followMouse();
  }, [position]);

  return (
    <div>
      <PrimaryCursor ref={primaryCursor} className={cursorHoverState.state ? 'active' : ''} />
      <SecondaryCursor ref={secondaryCursor} className={cursorHoverState.state ? 'active' : ''} />
    </div>
  );
};

export default Cursor;
