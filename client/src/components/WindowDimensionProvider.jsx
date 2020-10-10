import React, { createContext, useContext, useState, useEffect } from 'react'

//creates a context called WDCtx
const WindowDimensionCtx = createContext(null);

//create window dimension provider component that will give all children the window dimension context
const WindowDimensionProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <WindowDimensionCtx.Provider value={dimensions}>
      {children}
    </WindowDimensionCtx.Provider>
  )

}

export default WindowDimensionProvider
export const useWindowDimensions = () => useContext(WindowDimensionCtx)