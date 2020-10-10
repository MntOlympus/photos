import React from 'react'
import { useWindowDimensions } from '../WindowDimensionProvider.jsx'
import ImageHeader from './ImageHeader.jsx'
import ImageSlider from './ImageSlider.jsx'

const ResponsiveLayoutImageHeader = (props) => {
  const breakpoint = 550;
  const { width } = useWindowDimensions();
  //want to use width to determine which component type to render based on breakpoint
  //greater than breakpoint image header else render single images
  return (width > breakpoint ? <ImageHeader images={props.images} view={props.view} changeView={props.changeView} /> : <ImageSlider initialIndex={0} images={props.images} view={props.view} changeView={props.changeView} />)
};


export default ResponsiveLayoutImageHeader