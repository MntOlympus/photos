import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageHeader from "./ImageHeader.jsx";
import ImageCarousel from "./ImageCarousel.jsx";

function App() {
  const [images, setImages] = useState([]);
  const [clickedImage, setClickedImage] = useState(0);
  const [view, setView] = useState(true);

  const changeView = () => {
    setView(!view);
  };

  const displayImages = (images) => {
    setImages(images);
  };

  if (images.length < 1) {
    console.log("we are getting images");
    axios
      .get("/photos?propId=1")
      .then((response) => {
        displayImages(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
