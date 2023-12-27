// Contact.jsx

import { Alert, Container } from "react-bootstrap";
import './Contact.css'; // Import your custom CSS

export function Contact() {
  return (
    <Container className="mt-4">
      <Alert variant="primary">
        <div className="text-center">
          <h1 className="custom-heading">Contact US</h1>
        </div>
        <div className="contact-info" align="center">
          <h4>Phone</h4>
          <p>+91-99988883, +91-77777772</p>
          <h4>Email</h4>
          <p>admin@gmail.com</p>
          <h4>Address</h4>
          <p>Kharghar,cdac,Mumbai</p>
        </div>
      </Alert>
    </Container>
  );
}
