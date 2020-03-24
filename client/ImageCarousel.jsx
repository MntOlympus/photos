import React from 'react';
import ReactDOM from 'react-dom';


class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state =  {
      allImages: this.props.images,
      currentIndex: this.props.clickedImageIndex,
      currentImage: {},
      counter: 1
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);

  }

  componentDidMount() {
    this.setState({
      currentImage: this.state.allImages[this.state.currentIndex]
    })
  }

  handleClick(event) {
    this.props.changeView(this.props.view)
  }

  handleLeftClick(event) {
    this.setState({currentIndex: Number(this.state.currentIndex) - 1}, () => {
      this.setState({currentImage: this.state.allImages[this.state.currentIndex]})
    })
  }

  handleRightClick(event) {
    this.setState({currentIndex: Number(this.state.currentIndex) + 1}, () => {
      this.setState({currentImage: this.state.allImages[this.state.currentIndex]})
    })
  }

  render() {
    if (this.state.currentImage !== undefined){
      console.log('from render' , this.state.currentImage)
      if (this.state.currentIndex < 1){
        return (
          <div>

            <div className="header">
              <button onClick={this.handleClick} className="close-btn">X Close</button>
              <span className="counter">{Number(this.state.currentIndex) + 1} / {this.state.allImages.length}</span>
            </div>

          <body>
            <span>
              <div className="image-carousel">
                  <img id={this.state.currentIndex} className= "main-image" src={this.state.currentImage.url}></img>
              </div>
              <button onClick={this.handleRightClick} className="right-button"><img className="btn-image" src="./right.jpeg"></img></button>
            </span>
            <div className="description">
              <span >{this.state.currentImage.description}</span>
            </div>
          </body>

        </div>
                )
      } else if (this.state.currentIndex === this.state.allImages.length - 1) {
        return (
          <div>

            <div className="header">
              <button onClick={this.handleClick} className="close-btn">X Close</button>
              <span className="counter">{Number(this.state.currentIndex) + 1} / {this.state.allImages.length}</span>
            </div>

          <body>
            <span>
              <button onClick={this.handleLeftClick} className="left-button"><img className="btn-image" src="./left.jpeg"></img></button>
              <div className="image-carousel">
                  <img id={this.state.currentIndex} className= "main-image" src={this.state.currentImage.url}></img>
              </div>
            </span>
            <div className="description">
              <span >{this.state.currentImage.description}</span>
            </div>
          </body>

        </div>
        )
      } else {
        return (
          <div>

            <div className="header">
              <button onClick={this.handleClick} className="close-btn">X Close</button>
              <span className="counter">{Number(this.state.currentIndex) + 1} / {this.state.allImages.length}</span>
            </div>

          <body>
            <span>
              <button onClick={this.handleLeftClick} className="left-button"><img className="btn-image" src="./left.jpeg"></img></button>
              <div className="image-carousel">
                  <img id={this.state.currentIndex} className= "main-image" src={this.state.currentImage.url}></img>
              </div>
              <button onClick={this.handleRightClick} className="right-button"><img className="btn-image" src="./right.jpeg"></img></button>
            </span>
            <div className="description">
              <span >{this.state.currentImage.description}</span>
            </div>
          </body>

        </div>
        )
      }
    }
  }
}
export default ImageCarousel

// render() {
//   if (this.state.currentImage !== undefined){
//     console.log('from render' , this.state.currentImage)
//     if (this.state.currentIndex < 1){
//       return (
//         <div className="image-carousel">
//           <button onClick={this.handleClick} className="close-btn">X Close</button>
//           <h1>className="counter">1/{this.state.allImages.length}</h1>

//           <div className="counter">1/{this.state.allImages.length}</div>
//           <img id={this.state.currentIndex} className= "main-image" src={this.state.currentImage.url}></img>
//           <div className="description">{this.state.currentImage.description}</div>
//           <button onClick={this.handleRightClick} className="right-button">RIGHT</button>
//         </div>
//               )
//     } else if (this.state.currentIndex === this.state.allImages.length - 1) {
//       return (
//         <div className="image-carousel">
//           <button onClick={this.handleClick} className="close-btn">X Close</button>
//           <div className="counter">{this.state.allImages.length}/{this.state.allImages.length}</div>
//           <img id={this.state.currentIndex} className= "main-image" src={this.state.currentImage.url}></img>
//           <div className="description">{this.state.currentImage.description}</div>
//           <button onClick={this.handleLeftClick} className="left-button">LEFT</button>
//         </div>
//       )
//     } else {
//       return (
//         <div className="image-carousel">
//           <button onClick={this.handleClick} className="close-btn">X Close</button>
//           <div className="counter">{Number(this.state.currentIndex) + 1}/{this.state.allImages.length}</div>
//           <img id={this.state.currentIndex} className= "main-image" src={this.state.currentImage.url}></img>
//           <div className="description">{this.state.currentImage.description}</div>
//           <button onClick={this.handleLeftClick} className="left-button">LEFT</button>
//           <button onClick={this.handleRightClick} className="right-button">RIGHT</button>
//         </div>
//       )
//     }
//   }
// }