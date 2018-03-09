import React, {Component} from 'react';
import '../../index.css';
import { BrowserRouter as  Route, Switch } from "react-router-dom";
import {
    Grid,
    Col,
    Row
} from 'react-bootstrap';
import * as routes from '../../constants/routes';
import Sidebar from '../Sidebar';
import Companies from './companies';
import Contacts from './contacts';
import Tasks from './tasks';
import Opportunities from './opportunities';
import Projects from './projects';
import Imports from './imports';
import Documents from './documents';
import Calendars from './calendars';

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
                                    <Route path={routes.CALENDARS} component={Calendars}/>
                                    <Route path={routes.COMPANIES} component={Companies}/>
                                    <Route path={routes.CONTACTS} component={Contacts}/>
                                    <Route path={routes.TASKS} component={Tasks}/>
                                    <Route path={routes.OPPORTUNITIES} component={Opportunities}/>
                                    <Route path={routes.PROJECTS} component={Projects}/>
                                    <Route path={routes.DOCUMENTS} component={Documents}/>
                                    <Route path={routes.IMPORTS} component={Imports}/>
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