import React, { Component } from 'react';
import firebase from 'firebase';
import { Image} from 'react-bootstrap';
import imgCompanies from '../../img/city.png';
import { Grid, Row, Col } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';




class Companies extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title:'',
            name: '',
            siret: '',
            address: '',
            postalCode: '',
            city: '',
            country: '',
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('companies');
        const item = {
            name: this.state.name,
            siret: this.state.siret,
            address: this.state.address,
            postalCode: this.state.postalCode,
            city: this.state.city,
            country: this.state.country

        }
        itemsRef.push(item);
        this.setState({
            name: '',
            siret: '',
            address: '',
            postalCode: '',
            city: '',
            country: ''
        });
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('companies');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              name: items[item].name,
              siret: items[item].siret,
              address: items[item].address,
              postalCode: items[item].postalCode,
              city: items[item].city,
              country: items[item].country
            });
          }
          this.setState({
            items: newState
          });
        });
    }

    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/companies/${itemId}`);
        itemRef.remove();
    }

    

    render() {

        return (
            <div className="container-fluid">
                <Image src={imgCompanies} circle/>
                <h3>{ this.state.title }</h3>
                <hr />
                
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12} md={9}>
                        <div className="container-fluid">
                            <h4>Companies list ...</h4>
                            <hr />
                            <BootstrapTable data={this.state.items} striped hover pagination>
                                <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                                <TableHeaderColumn dataField='siret'>Siret</TableHeaderColumn>
                                <TableHeaderColumn dataField='address'> Address</TableHeaderColumn>
                                <TableHeaderColumn dataField='postalCode'>Postal code</TableHeaderColumn>
                                <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
                                <TableHeaderColumn dataField='country'>Country</TableHeaderColumn>
                                <TableHeaderColumn dataField=''>actions</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <h4>Add new company</h4>
                            <hr />
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <input type="text" name="name" className="form-control" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="siret" className="form-control" placeholder="Siret" onChange={this.handleChange} value={this.state.siret} />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="address" className="form-control" placeholder="Address" onChange={this.handleChange} value={this.state.address} />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="postalCode" className="form-control" placeholder="Postal code" onChange={this.handleChange} value={this.state.postalCode} />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="city" className="form-control" placeholder="City" onChange={this.handleChange} value={this.state.city} />
                                </div>
                                <div class="form-group">
                                    <input type="text" name="country" className="form-control" placeholder="Country" onChange={this.handleChange} value={this.state.country} />
                                </div>
                                
                                <button className="btn btn-primary">Add company</button>
                            </form>
                        </Col>
                    </Row>
                </Grid>
                
            </div>    
        );
    }
}

export default Companies;