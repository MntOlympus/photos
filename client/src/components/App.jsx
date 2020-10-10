import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import WindowDimensionProvider from './WindowDimensionProvider.jsx'
import ResponsiveLayoutImageHeader from "./ImageHeader/ResponsiveLayoutImageHeader.jsx"
import ResponsiveLayoutImageCarousel from './ImageCarousel/ResponsiveLayoutImageCarousel.jsx'


const regeneratorRuntime = require("regenerator-runtime");

function App() {
  const [images, setImages] = useState([]);
  const [clickedImage, setClickedImage] = useState(0);
  const [view, setView] = useState(true);
  const [isFetching, setFetching] = useState(true);

  //changes view between ImageHeader <-> ImageCarousel
  const changeView = () => {
    setView(!view);
  };

  //API request to database for image URLs of an individual property
  useEffect(() => {
    async function fetchData() {
      const results = await axios("/photos?propId=1").then((results) => {
        setImages(results);
        setFetching(false);
      });
    }
    fetchData();
  }, []);

  //conditionally renders ImageHeader or ImageCarousel depending on view
  if (view === true && isFetching === false) {
    return (
      <WindowDimensionProvider>
        <ResponsiveLayoutImageHeader images={images} view={view} changeView={changeView} />
      </WindowDimensionProvider>
    );

  } else if (view === false && isFetching === false) {
    return (
      <WindowDimensionProvider>
        <ResponsiveLayoutImageCarousel images={images} view={view} changeView={changeView} />
      </WindowDimensionProvider>
    )
  } else {
    return <div></div>;
  }
}

export default App;
