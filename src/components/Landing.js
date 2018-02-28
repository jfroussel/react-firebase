import React, { Component } from 'react';
import * as firebase from 'firebase';

class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title:'Companies list ...'
    }
  }

  componentWillMount() {

    const database = firebase.database();
    const ref = database.ref('companies');

    ref.on('value', snap => {
      this.setState({
        companies:snap.val()
      })
    })
    
  }

  render() {

    const cies = this.state.companies.map((cie, i) => <h4 key={i}>{ cie.name }</h4>)

    return (
      <div>
        <h3>Welcome on React-firebase</h3>
        <h4>{this.state.title}</h4>
        <hr />
          {cies}
      </div>
    )

   
     
    
  }

  
}

export default LandingPage;