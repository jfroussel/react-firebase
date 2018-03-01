import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import imgTasks from '../../img/tasks.png';

class Tasks extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title:'Welcome to the tasks page ...'
        };
        
    }

    render() {

        return (
            <div className="container-fluid">
            <Image src={imgTasks} circle/>
                <h3>{ this.state.title }</h3>
            </div>    
        )
    }
}

export default Tasks;