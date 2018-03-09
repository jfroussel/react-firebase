import React, {Component} from 'react';

class Calendars extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title: 'Welcome to the calendars page ...'
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

export default Calendars;