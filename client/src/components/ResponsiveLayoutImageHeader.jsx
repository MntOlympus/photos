import React from 'react'
import { useWindowDimensions } from './WindowDimensionProvider.jsx'
import ImageHeader from './ImageHeader.jsx'
import SingleImage from './SingleImage.jsx'

const ResponsiveLayoutImageHeader = (props) => {
  console.log('hello')
  const breakpoint = 192;
  const { width } = useWindowDimensions()

  //want to use width to decide which component type to render based on breakpoint
  //check windowWidth
  //greater than breakpoint image header else render single images
  return (width > breakpoint ? <ImageHeader images={props.images} view={props.view} changeView={props.changeView} /> : <SingleImage images={props.images} view={props.view} changeView={props.changeView} />)

};


export default ResponsiveLayoutImageHeader