import React from 'react';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title:'Welcome on Home page ...'
    }
  }

 
  render() {
    return (
      <div className="container">
        <h3>{ this.state.title }</h3>
        <hr />
      </div>
    );
  }
}


export default HomePage;