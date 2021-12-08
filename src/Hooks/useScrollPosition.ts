import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return offsetY;
};

export default useScrollPosition;
