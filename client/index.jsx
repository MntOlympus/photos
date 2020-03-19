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
      clickedImage: ''
    }

    this.changeView = this.changeView.bind(this);

  }

  changeView (view, clickedImage) {
     this.setState({view:!view})
     this.setState({clickedImage: clickedImage}, () => {
       console.log(this.state.clickedImage)
     })
  }

  //GET request on mount to pull images by propId
  componentDidMount() {
    var index = 1 //eventually this will be random number between 1 and 100
    $.ajax({
      type: 'GET',
      url:'/photos',
      data: {propId:index},
      success: (results) => {
        console.log(results)
        this.setState({images: results}, () => {
          console.log(this.state.images)
        })
      }
    })
  }

  render() {
    if (this.state.view) {
      var component = <ImageHeader view={this.state.view} changeView={this.changeView} images={this.state.images}/>
    } else {
      var component = <ImageCarousel view={this.state.view} changeView={this.changeView} images={this.state.images} clickedImage={this.state.clickedImage}/>
    }

    return (
      <div>
        {component}
      </div>
    )

  }

}
ReactDOM.render(<App />, document.getElementById('app'))
