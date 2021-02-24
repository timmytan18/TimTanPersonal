import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {

  let dim = { width: 1000, height: 1000 };

  if (typeof window !== `undefined`) {
    dim = getWindowDimensions();
  }

  const [windowDimensions, setWindowDimensions] = useState(dim);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
