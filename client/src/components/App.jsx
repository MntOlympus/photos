import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import ImageHeader from "./ImageHeader.jsx";
import ImageCarousel from "./ImageCarousel.jsx";
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
    let component = (
      <ImageHeader images={images} view={view} changeView={changeView} />
    );
    return <div>{component}</div>;
  } else if (view === false && isFetching === false) {
    let component = (
      <ImageCarousel images={images} view={view} changeView={changeView} />
    );
    return <div>{component}</div>;
  } else {
    return <div>Loading your home.....</div>;
  }
}

export default App;
