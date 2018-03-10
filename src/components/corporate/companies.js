import React, {Component} from 'react';
import firebase from 'firebase';
import {Grid, Row, Col, Button, Modal} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Sidebar from '../Sidebar';


class Companies extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title: '',
            name: '',
            siret: '',
            address: '',
            postalCode: '',
            city: '',
            country: '',
            items: [],
            show: false


        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);

        // handle add new company Modal
        this.handleShow = this
            .handleShow
            .bind(this);
        this.handleClose = this
            .handleClose
            .bind(this);

        this.removeCompanies = this
            .removeCompanies
            .bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase
            .database()
            .ref('companies');
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

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    componentDidMount() {
        const itemsRef = firebase
            .database()
            .ref('companies');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            console.log(items)
            let newState = [];
            for (let item in items) {

                newState.push({
                    id: item,
                    name: items[item].L1_DECLAREE,
                    siret: items[item].SIREN,
                    address: items[item].L4_DECLAREE,
                    postalCode: items[item].CODPOS,
                    city: items[item].LIBCOM,
                    country: items[item].L7_NORMALISEE
                });
            }
            this.setState({items: newState});
        });
    }

    removeItem(itemId) {
        const itemRef = firebase
            .database()
            .ref(`/companies/${itemId}`);
        itemRef.remove();
    }

    removeCompanies() {
        const companies = firebase
            .database()
            .ref('companies')
            .remove();
    }

    render() {
        const selectRowProp = {
            mode: 'checkbox'
        };

        function onAfterDeleteRow(rowKeys) {
            alert('The rowkey you drop: ' + rowKeys);

        }

        const options = {
            afterDeleteRow: onAfterDeleteRow // A hook for after droping rows.
        };

        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new company</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Name"
                                    onChange={this.handleChange}
                                    value={this.state.name}/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="siret"
                                    className="form-control"
                                    placeholder="Siret"
                                    onChange={this.handleChange}
                                    value={this.state.siret}/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="address"
                                    className="form-control"
                                    placeholder="Address"
                                    onChange={this.handleChange}
                                    value={this.state.address}/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="postalCode"
                                    className="form-control"
                                    placeholder="Postal code"
                                    onChange={this.handleChange}
                                    value={this.state.postalCode}/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    placeholder="City"
                                    onChange={this.handleChange}
                                    value={this.state.city}/>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    placeholder="Country"
                                    onChange={this.handleChange}
                                    value={this.state.country}/>
                            </div>
                            <button className="btn btn-primary" onClick={this.handleClose}>Save</button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <div className="container-fluid">
                    <h3>{this.state.title}</h3>
                    <hr/>

                    <Grid fluid>
                        <Row className="show-grid">
                            <Col xs={12} md={2}>
                                <Sidebar/>
                            </Col>
                            <Col xs={12} md={10}>
                                <div className="container-fluid">
                                    <h4>Companies list ...</h4>

                                    <Button bsStyle="default" onClick={this.handleShow}>Add new company</Button>
                                    <Button bsStyle="default" onClick={this.removeCompanies}>Remove companies</Button>
                                    
                                    <hr/>
                                    <BootstrapTable
                                        data={this.state.items}
                                        striped
                                        hover
                                        pagination
                                        selectRow={selectRowProp}
                                        deleteRow={true}
                                        options={options}
                                        search={true}
                                        multiColumnSearch={true}>
                                        <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
                                        <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField='siret'>Siren</TableHeaderColumn>
                                        <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
                                        <TableHeaderColumn dataField='postalCode' dataSort={true}>Postal code</TableHeaderColumn>
                                        <TableHeaderColumn dataField='city' dataSort={true}>City</TableHeaderColumn>
                                        <TableHeaderColumn dataField='country' dataSort={true}>Country</TableHeaderColumn>
                                        <TableHeaderColumn dataField=''>actions</TableHeaderColumn>
                                    </BootstrapTable>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Companies;