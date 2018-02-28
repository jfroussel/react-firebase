import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Table } from 'react-bootstrap';

class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title:'Companies list ...',
      companies:[]
    };
  }

  componentWillMount() {

    const database = firebase.database();
    const ref = database.ref('companies');

    ref.on('value', snap => {
      this.setState({
        companies:snap.val()
      });
    });
    
  }

  handleClick(event) {
    event.preventDefault()
    var el = event.target
    console.log(el)
    alert(el.innerText)
  }

  render() {

   

    return (
      <div className="container-fluid">
        <h3>Welcome on React-firebase</h3>
        <h4>{this.state.title}</h4>
        <hr />
        <div>
          <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Siret</th>
                    <th>Address</th>
                    <th>Postal code</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>phone</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.companies.map((company, index) => {
                  return (
            
                <tr key={index++} onClick={this.handleClick.bind(this)}>
                  <td>{index}</td>
                  <td>{company.name}</td>
                  <td>{company.siret}</td>
                  <td>{company.address}</td>
                  <td>{company.postalCode}</td>
                  <td>{company.city}</td>
                  <td>{company.country}</td>
                  <td>{company.email}</td>
                  <td>{company.location}</td>
                  <td>{company.phone}</td>
                </tr>
                )
                })}
                </tbody>
          </Table>
        </div>  
      </div>
    )
  } 
}

export default LandingPage;