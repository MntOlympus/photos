import React from 'react';
import ReactDOM from 'react-dom';
import ImageHeader from './ImageHeader.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      view: true,
      clickedImageIndex: 0
    }

    this.changeView = this.changeView.bind(this);

  }

  changeView (view, clickedImageIndex) {
     this.setState({view:!view})
     this.setState({clickedImageIndex: clickedImageIndex}, () => {
       console.log('clicked image from index.jsx', this.state.clickedImageIndex)
     })
  }

  //GET request on mount to pull images by propId
  componentDidMount() {
    var index = 1;

    $.ajax({
      type: 'GET',
      url:'/photos',
      data: {propId:index},
      success: (results) => {
        console.log(results)
        // console.log('from index.jsx GET', results[0].images[0].url)
        this.setState({images: results[0].images})
      }
    })
  }

  render() {
    if (this.state.images.length > 1) {
      if (this.state.view) {
        var component = <ImageHeader view={this.state.view} changeView={this.changeView} images={this.state.images}/>
      } else {
        var component = <ImageCarousel view={this.state.view} changeView={this.changeView} images={this.state.images} clickedImageIndex={this.state.clickedImageIndex}/>
      }
    }
    return (
      <div>
        {component}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('photos'))
