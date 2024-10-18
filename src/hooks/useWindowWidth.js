// src/hooks/useWindowWidth.js

import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const isClient = typeof window === 'object';

  const getWidth = () => (isClient ? window.innerWidth : undefined);

  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWidth(getWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  return width;
};

export default useWindowWidth;
