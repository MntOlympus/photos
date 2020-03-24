import React from 'react';
import ReactDOM from 'react-dom';

const ImageHeader = (props) => {

  const handleClick = (event) => {
    props.changeView(props.view, event.target.id)
  }

  return (<div >
            <div className="container">
                <img id={0} onClick ={handleClick} className="cell cell-1" width="500" height="500" src={props.images[0].url}></img>
                <img id={1} onClick ={handleClick} className="cell cell-2" src={props.images[1].url}></img>
                <img id={2} onClick ={handleClick} className="cell cell-3" src={props.images[2].url}></img>
                <img id={3} onClick ={handleClick} className="cell cell-4" src={props.images[3].url}></img>
                <img id={4} onClick ={handleClick} className="cell cell-5" src={props.images[4].url}></img>
            </div>
              <span>
                <button className="show-all" id={0} onClick={handleClick} >show all photos</button>
              </span>
          </div>)
}

export default ImageHeader