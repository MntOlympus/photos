import React from 'react';
import ReactDOM from 'react-dom';


class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      initialImage: this.props.clickedImage,
      allImages:this.props.images

    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event) {
    this.props.changeView(this.props.view)
  }

  handleLeftClick(event) {
    console.log('hello')

  }

  handleRightClick(event) {
    console.log('ohh snap')

  }

  render() {
    return (
      <div class="image-carousel">
        <button onClick={this.handleClick} class="close-btn">X Close</button>
        <div class="counter">1/20</div>
        <img class= "main-image" src={this.state.initialImage}></img>
        <div class="description">THIS IS OUR DESCRIPTION</div>
        <button onClick={this.handleLeftClick} class="left-button"><img src="./leftArrow.jpeg"></img></button>
        <button onClick={this.handleRightClick} class="right-button"><img src="./rightArrow.jpeg"></img></button>

      </div>
    )
  }

}
export default ImageCarousel