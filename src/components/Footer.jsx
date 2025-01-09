import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2025 VVCMC. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const footerStyle = {
  
  backgroundColor: '#333',
  color: '#fff',
  paddingTop: '10px',
  paddingBottom: '10px',
};

export default Footer;
