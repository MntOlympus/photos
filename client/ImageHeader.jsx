import React from 'react';
import ReactDOM from 'react-dom';

const ImageHeader = (props) => {

  const handleClick = (event) => {
    props.changeView(props.view, event.target.src)

  }

  return (<div class="container">
              <img onClick ={handleClick}class ="cell cell-1" width="500" height="500" src={"https://mtnolympusimages.s3-us-west-1.amazonaws.com/1/1.jpeg"}></img>
              {/* <div class="cell cell-1">1.</div> */}
              <img onClick ={handleClick} class class ="cell cell-2" src={"https://mtnolympusimages.s3-us-west-1.amazonaws.com/1/2.jpeg"}></img>
              {/* <div class="cell cell-2">2.</div> */}
              <img onClick ={handleClick}class class ="cell cell-3" src={"https://mtnolympusimages.s3-us-west-1.amazonaws.com/1/3.jpeg"}></img>
              {/* <div class="cell cell-3">3.</div> */}
              <img onClick ={handleClick}class class ="cell cell-4" src={"https://mtnolympusimages.s3-us-west-1.amazonaws.com/1/4.jpeg"}></img>
              {/* <div class="cell cell-4">4.</div> */}
              <img onClick ={handleClick}class class ="cell cell-5" src={"https://mtnolympusimages.s3-us-west-1.amazonaws.com/1/5.jpeg"}></img>
              {/* <div class="cell cell-5">5.</div> */}
          </div>)
}

export default ImageHeader