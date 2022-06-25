import { useEffect, useState } from 'react';

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const onChangeWindowWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onChangeWindowWidth);
    return () => {
      window.removeEventListener('resize', onChangeWindowWidth);
    };
  });
  return windowWidth;
};