import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ clientX: 0, clientY: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ clientX: clientX, clientY: clientY });
    };
    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}
