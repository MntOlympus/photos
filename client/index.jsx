import React from 'react';
import ReactDOM from 'react-dom';
import ImageHeader from './ImageHeader.jsx'
import ImageCarousel from './ImageCarousel.jsx'
const axios = require('axios')
import $ from 'jquery'


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

  // componentDidMount() {
  //   $.ajax({
  //     url: '/photos',
  //     success: (results) => {
  //       this.setState({images: results},() => {
  //         console.log(this.state.images);
  //       } )
  //     }
  //   })
  // }

  changeView (view, clickedImage) {
     this.setState({view:!view})
     this.setState({clickedImage: clickedImage}, () => {
       console.log(this.state.clickedImage)
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



//create get request for client
componentDidMount() {
  // var index = 1
  // var data = JSON.stringify({prod: 1})
  // console.log(data)

  var data = {"propId": "1"}
  var data = JSON.stringify(data)


  // $.get('/photos', data, (results) => {
  //   this.setState({images: results}, () => {
  //     console.log(results)
  //   })
  // }, 'json')

  // $.ajax({
  //   type: 'GET',
  //   url: '/photos',
  //   contentType: "application/json; charset=utf=8",
  //   data: {"propId": "1"},
  //   success: (results) => {
  //     this.setState({images: results}, () => {
  //       console.log(results)
  //     })
  //   }
  // })


$.ajax({
  type: 'POST',
  url:'/photos',
  data: {propId:1},
  success: (results) => {
    this.setState({images: results}, () => {
      console.log(this.state.images)
    })
  }
})

// var data = {"name":"John Doe"}
// $.ajax({
//     dataType : "json",
//     contentType: "application/json; charset=utf-8",
//     data : JSON.stringify(data),
//     success : function(result) {
//         alert(result.success); // result is an object which is created from the returned JSON
//     },
// });

}

}
ReactDOM.render(<App />, document.getElementById('app'))
