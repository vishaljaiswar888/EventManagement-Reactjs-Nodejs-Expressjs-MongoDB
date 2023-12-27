import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Navigationbar.css"; // Import your custom CSS file

export function Navigationbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">EventManagementApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/adminlogin">
                            <Nav.Link>AdminLogin</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/eventmanagement">
                            <Nav.Link>EventMangement</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Signup">
                            <Nav.Link>SignUp</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/EventList">
                            <Nav.Link>EventList</Nav.Link>
                        </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
