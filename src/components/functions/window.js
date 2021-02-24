import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {

  let height;
  let width;

  if (typeof window !== `undefined`) {
    height = window.innerHeight
    width = window.innerWidth
  } else {
    height, width = getWindowDimensions();
  }

  const [windowDimensions, setWindowDimensions] = useState({ width, height });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}