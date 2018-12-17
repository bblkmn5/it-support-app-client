import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
      <Row>
        <Col md={12}>
          <div className={'aboutText'}>
            <h1>IT-SUPPORT DATABASE</h1><br />
            <h2>A Computer Service Support Database</h2>
            <p>Built with:</p>
            <ul>
              <li>React Frontend and Redux middleware</li>
              <li>React-Bootstrap</li> 
              <li>Rails backend API</li>
            </ul>
            <p></p>
          </div>
        </Col>
      </Row>
  )
}

export default About;
