import React, {Component} from 'react';

class Contacts extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title: 'Welcome to the contacts page ...'

        }

    }

    render() {

        return (
            <div className="container-fluid">
                <h3>{this.state.title}</h3>
                <hr/>
            </div>
        )
    }
}

export default Contacts;