import React, {Component} from 'react';
import * as Icon from 'react-feather';
import {Link} from 'react-router-dom';
import * as routes from '../constants/routes';
import {Nav, NavItem, Glyphicon} from 'react-bootstrap';

function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Nav bsStyle="pills" stacked activeKey={1}>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="calendar"/></span>
            Calendar
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="globe"/></span>
            <Link to={routes.COMPANIES}>Companies</Link>
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="user"/></span>
            <Link to={routes.CONTACTS}>Contacts</Link>
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="th-list"/></span>
            <Link to={routes.TASKS}>Tasks</Link>
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="stats"/></span>
            <Link to={routes.OPPORTUNITIES}>Opportunities</Link>
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="briefcase"/></span>
            <Link to={routes.PROJECTS}>Projects</Link>
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="folder-open"/></span>
            <Link to={routes.DOCUMENTS}>Documents</Link>
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="folder-open"/></span>
            <Link to={routes.IMPORTS}>Imports</Link>
          </NavItem>
        </Nav>
      </div>

    );
  }
}

export default Sidebar;