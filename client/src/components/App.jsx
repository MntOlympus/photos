import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageHeader from "./ImageHeader.jsx";
import ImageCarousel from "./ImageCarousel.jsx";
const regeneratorRuntime = require("regenerator-runtime");

function App() {
  const [images, setImages] = useState([]);
  const [clickedImage, setClickedImage] = useState(0);
  const [view, setView] = useState(true);

  const changeView = () => {
    setView(!view);
  };

  // useEffect(async () => {
  //   const results = await axios("/photos?propId=1");
  //   setImages(results.data);
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const results = await axios("/photos?propId=1");
      setImages(results);
    }
    fetchData();
  }, []);

  if (view === true) {
    let component = (
      <ImageHeader images={images} view={view} changeView={changeView} />
    );
    return <div>{component}</div>;
  } else {
    let component = (
      <ImageCarousel images={images} view={view} changeView={changeView} />
    );
    return <div>{component}</div>;
  }
}

export default App;
