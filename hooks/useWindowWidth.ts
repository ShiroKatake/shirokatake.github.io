import { useEffect, useState } from 'react';

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const onChangeWindowWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onChangeWindowWidth);
    return () => {
      window.removeEventListener('resize', onChangeWindowWidth);
    };
  }, [windowWidth]);
  return windowWidth;
};