import React, { Component } from 'react';

class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title:'landing page ...'
    };
  }


  render() {

   

    return (
      <div className="container-fluid">
        <h3>Welcome</h3>
        <h4>{this.state.title}</h4>
        <hr /> 
      </div>
    )
  } 
}

export default LandingPage;