import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import imgCompanies from '../../img/city.png';


class Companies extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title:'Welcome on Companies page ...'
        };
        
    }

    render() {

        return (
            <div className="container">
            <Image src={imgCompanies} circle/>
                <h3>{ this.state.title }</h3>
            </div>    
        );
    }
}

export default Companies;