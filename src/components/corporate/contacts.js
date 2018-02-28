import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import imgContacts from '../../img/people.png';


class Contacts extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title:'Welcome on contacts page ...'
        };
        
    }

    render() {

        return (
            <div className="container">
            <Image src={imgContacts} circle/>
                <h3>{ this.state.title }</h3>
            </div>     
        )
    }
}

export default Contacts;