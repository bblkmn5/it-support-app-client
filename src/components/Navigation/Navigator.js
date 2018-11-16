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
      </Navbar.Header>
        <Nav>
          <LinkContainer to={'/technicians'} exact>
            <NavItem eventKey={1}>
              Technicians
            </NavItem>
          </LinkContainer>
          <LinkContainer to={'/about'}>
            <NavItem eventKey={2}>
              About
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    </Col>
  );
};

export default Navigator;
