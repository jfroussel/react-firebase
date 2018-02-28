import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import imgOpportunities from '../../img/opportunities.png';

class Opportunities extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title:'Welcome on opportunities page ...'
        };
        
    }

    render() {

        return (
            <div className="container">
            <Image src={imgOpportunities} circle/>
                <h3>{ this.state.title }</h3>
            </div>        
        )
    }
}

export default Opportunities;