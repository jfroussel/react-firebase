import React, {Component} from 'react';
import '../../index.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
    Grid,
    Col,
    Image,
    Row,
    Popover,
    OverlayTrigger
} from 'react-bootstrap';
import Sidebar from '../Sidebar';
import Companies from './companies';
import Contacts from './contacts';
import Tasks from './tasks';
import Opportunities from './opportunities';
import Projects from './projects';
import Imports from './imports';
import Documents from './documents';

class Corporate extends Component {
    constructor(props) {

        super(props);

        this.state = {
            title: 'Welcome to the Corporate page ...'
        };
    }

    render() {
        return (

            <div className="container-fluid">
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12} md={2}>
                            <Sidebar/>
                        </Col>
                        <Col xs={12} md={10}>
                            <div className="container-fluid">
                                <Switch>
                                    
                                    <Route path="/companies" component={Companies}/>
                                    <Route path="/contacts" component={Contacts}/>
                                    <Route path="/tasks" component={Tasks}/>
                                    <Route path="/opportunities" component={Opportunities}/>
                                    <Route path="/projects" component={Projects}/>
                                    <Route path="/documents" component={Documents}/>
                                    <Route path="/imports" component={Imports}/>
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Corporate;