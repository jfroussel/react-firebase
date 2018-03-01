import React, { Component } from 'react';
import firebase from 'firebase';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Image} from 'react-bootstrap';
import imgCompanies from '../../img/city.png';




class Companies extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title:'Welcome to the Companies page ...',
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
    

    render() {

        return (
            <div className="container-fluid">
                <Image src={imgCompanies} circle/>
                <h3>{ this.state.title }</h3>
                <hr />
                


                
                <BootstrapTable data={this.state.companies} version='4'>
                    <TableHeaderColumn isKey={true} dataField='id'>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='siret'>Siret</TableHeaderColumn>
                    <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
                    <TableHeaderColumn dataField='postalCode'>Postal code</TableHeaderColumn>
                    <TableHeaderColumn dataField='city'>City</TableHeaderColumn>
                    <TableHeaderColumn dataField='country'>Country</TableHeaderColumn>
                </BootstrapTable>
            </div>    
        );
    }
}

export default Companies;