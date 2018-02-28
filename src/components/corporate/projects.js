import React, { Component } from 'react';
import { Image} from 'react-bootstrap';
import imgProjects from '../../img/projects.png';

class Projects extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title:'Welcome on projects page ...'
        };
        
    }

    render() {

        return (
            <div className="container">
            <Image src={imgProjects} circle/>
                <h3>{ this.state.title }</h3>
            </div>   
        )
    }
}

export default Projects;