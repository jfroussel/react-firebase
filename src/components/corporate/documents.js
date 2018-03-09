import React, {Component} from 'react';

class Documents extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title: 'Welcome to the documents page ...'
        };
    }

    render() {

        return (
            <div className="container-fluid">
                <h3>{this.state.title}</h3>
            </div>
        )
    }
}

export default Documents;