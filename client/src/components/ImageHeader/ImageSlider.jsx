import React, { useState, useEffect } from "react";
import SliderImage from './SliderImage.jsx'

const ImageSlider = (props) => {

  return (
    <SliderImage changeView={props.changeView} images={props.images} />
  )
}

export default ImageSlider