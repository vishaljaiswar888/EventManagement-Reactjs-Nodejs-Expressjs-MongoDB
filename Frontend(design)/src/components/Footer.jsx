// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export function Footer() {
  const footerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
    color: '#fff', // White text
    padding: '20px', // Add some padding for better appearance
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col className="text-right">
            <p>&copy; 2023 Event Management. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
