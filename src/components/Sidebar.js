import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';
import {Nav, NavItem, Glyphicon} from 'react-bootstrap';



class Sidebar extends Component {
  render() {
    return (
      <div>
        <Nav bsStyle="pills" stacked activeKey={1}>
          <NavItem componentClass={Link} href="/" to={routes.CALENDARS}>
            <span className="sidebar-icon"><Glyphicon glyph="calendar"/></span>
            Calendars
          </NavItem>

          <NavItem componentClass={Link} href="/" to={routes.COMPANIES}>
            <span className="sidebar-icon"><Glyphicon glyph="globe"/></span>
            Companies
          </NavItem>

          <NavItem componentClass={Link} href="/" to={routes.CONTACTS}>
            <span className="sidebar-icon"><Glyphicon glyph="user"/></span>
            Contacts
          </NavItem>

          <NavItem componentClass={Link} href="/" to={routes.TASKS}>
            <span className="sidebar-icon"><Glyphicon glyph="th-list"/></span>
            Tasks
          </NavItem>

          <NavItem componentClass={Link} href="/" to={routes.OPPORTUNITIES}>
            <span className="sidebar-icon"><Glyphicon glyph="stats"/></span>
            Opportunities
          </NavItem>

          <NavItem componentClass={Link} href="/" to={routes.PROJECTS}>
            <span className="sidebar-icon"><Glyphicon glyph="briefcase"/></span>
            Projects
          </NavItem>

          <NavItem componentClass={Link} href="/" to={routes.DOCUMENTS}>
            <span className="sidebar-icon"><Glyphicon glyph="folder-open"/></span>
            Documents
          </NavItem>

          <NavItem componentClass={Link} href="/" to={routes.IMPORTS}>
            <span className="sidebar-icon"><Glyphicon glyph="folder-open"/></span>
            Imports
          </NavItem>
        </Nav>
      </div>

    );
  }
}

export default Sidebar;