import React from 'react';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigator.css';

const Navigator = (props) => {
  return (
    <Col md={12}>
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to={'/'} exact>Home</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to={'/add_order'} exact>
            <NavItem eventKey={1}>
              Add Order
            </NavItem>
          </LinkContainer>
          <LinkContainer to={'/orders'}>
            <NavItem eventKey={2}>
              View Orders
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

export default Navigator;
