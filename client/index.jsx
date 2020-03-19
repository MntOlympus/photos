import React from 'react';
import ReactDOM from 'react-dom';
import ImageHeader from './imageHeader.jsx'
const axios = require('axios')
import $ from 'jquery'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      view: true;
    }
  }

  render() {
    if (view) {
      <ImageHeader />
    }
    <div>
      if this.state.view === 1}

    </div>

  }


//create get request for client

  componentDidMount() {
    $.ajax({
      url: '/photos',
      success: (results) => {
        console.log(results)
      }
    })


  }

}

ReactDOM.render(<App />, document.getElementById('app'))
