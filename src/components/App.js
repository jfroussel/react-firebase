import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import firebase from 'firebase';
import withAuthentication from './withAuthentication';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import GetStarted from './GetStarted';
import Documentation from './Documentation';
import Api from './Api';
import Corporate from './corporate/corporate';
import Contacts from './corporate/contacts';
import Companies from './corporate/companies';
import Opportunities from './corporate/opportunities';
import Projects from './corporate/projects';
import Tasks from './corporate/tasks';
import Documents from './corporate/documents';
import Calendars from './corporate/calendars';
import Imports from './corporate/imports';

import * as routes from '../constants/routes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() { 
    return ( 
      <Router>
        <div>
          <Navigation authUser={this.state.authUser}/>

          <hr />

          <Route 
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route 
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route 
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route 
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route 
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route 
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
          <Route
            exact path={routes.GET_STARTED}
            component={() => <GetStarted />}
          />
          <Route
            exact path={routes.DOCUMENTATION}
            component={() => <Documentation />}
          />
          <Route
            exact path={routes.API}
            component={() => <Api />}
          />
          <Route
            exact path={routes.CORPORATE}
            component={() => <Corporate />}
          />
          <Route
            exact path={routes.COMPANIES}
            component={() => <Companies />}
          />
           <Route
            exact path={routes.CONTACTS}
            component={() => <Contacts />}
          />
           <Route
            exact path={routes.OPPORTUNITIES}
            component={() => <Opportunities />}
          />
           <Route
            exact path={routes.PROJECTS}
            component={() => <Projects />}
          />
           <Route
            exact path={routes.TASKS}
            component={() => <Tasks />}
          />
          <Route
            exact path={routes.CALENDARS}
            component={() => <Calendars />}
          />
          <Route
            exact path={routes.DOCUMENTS}
            component={() => <Documents />}
          />
          <Route
            exact path={routes.IMPORTS}
            component={() => <Imports />}
          />

        </div>
      </Router>
    )
  }
}
 
export default withAuthentication(App);



  

