import React from 'react'
import { useWindowDimensions } from '../WindowDimensionProvider.jsx'
import ImageCarousel from './ImageCarousel.jsx'
import ImageColumn from './ImageColumn.jsx'



const ResponsiveLayoutImageCarousel = (props) => {
  const breakpoint = 575;
  const { width } = useWindowDimensions()
  //want to use width to decide which component type to render based on breakpoint
  //check windowWidth
  //greater than breakpoint image header else render single images
  return (width > breakpoint ? <ImageCarousel images={props.images} view={props.view} changeView={props.changeView} /> : <ImageColumn images={props.images} view={props.view} changeView={props.changeView} />)

};


export default ResponsiveLayoutImageCarousel