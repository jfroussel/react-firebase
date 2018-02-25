import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import { Nav, Navbar, NavItem} from 'react-bootstrap';

import * as routes from '../constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={routes.LANDING}>React-firebase</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <Link to={routes.HOME}>Home</Link>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={2}>
          <Link to={routes.ACCOUNT}>Account</Link>
        </NavItem>
        <NavItem eventKey={3}>
          <SignOutButton />
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
  

const NavigationNonAuth = () =>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={routes.LANDING}>React-firebase</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <Link to={routes.GET_STARTED}>Get started</Link>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem eventKey={2}>
          <Link to={routes.DOCUMENTATION}>Documentation</Link>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem eventKey={2}>
          <Link to={routes.API}>Api</Link>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}>
          <Link to={routes.SIGN_IN}>Sign In</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>; 

export default Navigation;

