import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import SignOutButton from './SignOut';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

import * as routes from '../constants/routes';

const Navigation = (props, {authUser}) => <div>
  {authUser
    ? <NavigationAuth/>
    : <NavigationNonAuth/>
}
</div>

Navigation.contextTypes = {
  authUser: PropTypes.object
};

const NavigationAuth = () => <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to={routes.LANDING}>React-firebase</Link>
    </Navbar.Brand>
    <Navbar.Toggle/>
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem componentClass={Link} href="/" to={routes.HOME}>Home</NavItem>
    </Nav>
    <Nav>
      <NavItem componentClass={Link} href="/" to={routes.CORPORATE}>Corporate</NavItem>
    </Nav>
    <Nav pullRight>
    <NavItem componentClass={Link} href="/" to={routes.ACCOUNT}>Account</NavItem>
      <NavItem>
        <SignOutButton/>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;

const NavigationNonAuth = () => <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to={routes.LANDING}>React-firebase</Link>
    </Navbar.Brand>
    <Navbar.Toggle/>
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem componentClass={Link} href="/" to={routes.GET_STARTED}>Get started</NavItem>
    </Nav>
    <Nav>
      <NavItem componentClass={Link} href="/" to={routes.DOCUMENTATION}>Documentation</NavItem>
    </Nav>
    <Nav>
      <NavItem componentClass={Link} href="/" to={routes.API}>Api</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem componentClass={Link} href="/" to={routes.SIGN_IN}>Sign In</NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;

export default Navigation;
