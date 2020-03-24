import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/ImageCarousel.css'


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
      if (this.state.currentIndex < 1){
        return (
          <div>

            <div className={styles.header}>
              <button onClick={this.handleClick} className={styles.closeBtn}>X Close</button>
              <span className={styles.counter}>{Number(this.state.currentIndex) + 1} / {this.state.allImages.length}</span>
            </div>

          <body>
            <span>
              <div className={styles.imageCarousel}>
                  <img id={this.state.currentIndex} className= {styles.mainImage} src={this.state.currentImage.url}></img>
              </div>
              <button onClick={this.handleRightClick} className={styles.rightButton}><img className={styles.btnImage} src="./right.jpeg"></img></button>
            </span>
            <div className={styles.description}>
              <span >{this.state.currentImage.description}</span>
            </div>
          </body>

        </div>
                )
      } else if (this.state.currentIndex === this.state.allImages.length - 1) {
        return (
          <div>

            <div className={styles.header}>
              <button onClick={this.handleClick} className={styles.closeBtn}>X Close</button>
              <span className={styles.counter}>{Number(this.state.currentIndex) + 1} / {this.state.allImages.length}</span>
            </div>

          <body>
            <span>
              <button onClick={this.handleLeftClick} className={styles.leftButton}><img className={styles.btnImage} src="./left.jpeg"></img></button>
              <div className={styles.imageCarousel}>
                  <img id={this.state.currentIndex} className= {styles.mainImage} src={this.state.currentImage.url}></img>
              </div>
            </span>
            <div className={styles.description}>
              <span >{this.state.currentImage.description}</span>
            </div>
          </body>

        </div>
        )
      } else {
        return (
          <div>

            <div className={styles.header}>
              <button onClick={this.handleClick} className={styles.closeBtn}>X Close</button>
              <span className={styles.counter}>{Number(this.state.currentIndex) + 1} / {this.state.allImages.length}</span>
            </div>

          <body>
            <span>
              <button onClick={this.handleLeftClick} className={styles.leftButton}><img className={styles.btnImage} src="./left.jpeg"></img></button>
              <div className={styles.imageCarousel}>
                  <img id={this.state.currentIndex} className= {styles.mainImage} src={this.state.currentImage.url}></img>
              </div>
              <button onClick={this.handleRightClick} className={styles.rightButton}><img className={styles.btnImage} src="./right.jpeg"></img></button>
            </span>
            <div className={styles.description}>
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

