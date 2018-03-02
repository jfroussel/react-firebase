import React, { Component } from 'react';
import * as Icon  from 'react-feather';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import {Nav, NavItem, Glyphicon } from 'react-bootstrap';



function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="calendar" /></span>
              Calendar
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="globe" /></span>
              Companies
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="user" /></span>
              Contacts
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="th-list" /></span>
              Tasks
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="stats" /></span>
              Opportunities
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="briefcase" /></span>
              Projects
          </NavItem>
          <NavItem>
            <span className="sidebar-icon"><Glyphicon glyph="folder-open" /></span>
            
              Documents
          </NavItem>
        </Nav>
      </div>
        
    );
  }
}

export default Sidebar;