import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto w-100">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5>🏢"Info Bailes"-2025</h5>
          </Col>
          <Col md={4}></Col>
          <Col md={4}>
            <h5>💻PROGRAMACION WEB II</h5>
    
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

