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


  // // Use hook to run the following code after page is loaded
  // useEffect(() => {
  //   /*
  //     Debounce function for performance to check window resizing every 1000ms instead of of every ms. 
  //     Upon resize, set new dimension to state.
  //     Update 1000 value as needed. Note: 1000 = 1 second
  //   */
  //   const debouncedHandleResize = debounce(function handleResize() {
  //     setWindowDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   }, 1000);
  //   // Listen for window resize and run the debounce resize function above.
  //   window.addEventListener(`resize`, debouncedHandleResize)
  //   // Remove the event listener if resizing stopped.
  //   return () => window.removeEventListener(`resize`, debouncedHandleResize)
  // }, [])