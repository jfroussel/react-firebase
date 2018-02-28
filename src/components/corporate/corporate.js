import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  '../../index.css';
import * as routes from '../../constants/routes';
import { Grid, Col, Image, Row} from 'react-bootstrap';
import imgCompanies from '../../img/city.png';
import imgContacts from '../../img/people.png';
import imgOpportunities from '../../img/opportunities.png';
import imgProjects from '../../img/projects.png';
import imgTasks from '../../img/tasks.png';


class Corporate extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title:'Welcome on Corporate page ...'
           
        };
        
    }

    render() {

        return (
            <div className="container">
                <Grid>
                    <Row>
                        <Col xs={6} md={2}>
                        <Link to={routes.COMPANIES}> 
                            <Image src={imgCompanies} circle />
                        </Link>
                        </Col>
                        <Col xs={6} md={2}>
                        <Link to={routes.CONTACTS}>
                            <Image src={imgContacts} circle />
                        </Link>
                        </Col>
                        <Col xs={6} md={2}>
                        <Link to={routes.OPPORTUNITIES}>
                            <Image src={imgOpportunities} circle />
                        </Link>
                        </Col>
                        <Col xs={6} md={2}>
                        <Link to={routes.PROJECTS}>
                            <Image src={imgProjects} circle />
                        </Link>
                        </Col>
                        <Col xs={6} md={2}>
                        <Link to={routes.TASKS}>
                            <Image src={imgTasks} circle />
                        </Link>
                        </Col>
                    </Row>
                </Grid>
                <hr />
                <h3>{ this.state.title }</h3>
                <hr />
            </div> 

        )
    }
}

export default Corporate;