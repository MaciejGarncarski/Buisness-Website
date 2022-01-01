import { useRef, useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { PrimaryCursor, SecondaryCursor } from './Cursor.styles';
import { useCursorContext } from '../../contexts/CursorContext';

const Cursor = function () {
  const { isActive } = useCursorContext();
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

      // primaryCursor.current.style.transform = `translate3d(${
      //   clientX - primaryCursor.current.clientWidth / 2
      // }px, ${clientY - primaryCursor.current.clientHeight / 2}px, 0)`;
      primaryCursor.current.style.left = `${clientX - primaryCursor.current.clientWidth}px`;
      primaryCursor.current.style.top = `${clientY - primaryCursor.current.clientHeight}px`;
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
        secondaryCursor.current.style.top = `${destinationY}px`;
        secondaryCursor.current.style.left = `${destinationX}px`;
      }
    };
    followMouse();
  }, [position]);

  useEffect(() => {
    const handleClick = async () => {
      primaryCursor.current?.classList.add('clicked');
      secondaryCursor.current?.classList.add('clicked');
      setTimeout(() => {
        primaryCursor.current?.classList.remove('clicked');
        secondaryCursor.current?.classList.remove('clicked');
      }, 500);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div>
      <PrimaryCursor ref={primaryCursor} className={isActive ? 'active' : ''} />
      <SecondaryCursor ref={secondaryCursor} className={isActive ? 'active' : ''} />
    </div>
  );
};

export { Cursor };
