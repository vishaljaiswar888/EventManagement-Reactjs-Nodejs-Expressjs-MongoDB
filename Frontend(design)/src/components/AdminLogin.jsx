import { Alert, Container, Form, FloatingLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AdminLogin() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-80">
      <Container className="mt-4 p-3 rounded" style={{ width: "500px", height: "380px", backgroundColor: "rgba(84, 84, 84, 0.7)", color: "#fff", textAlign: "center" }}>
        <>
        
          <FloatingLabel controlId="floatingInput" label="AdminUsername" className="mb-3 mt-3">
            <Form.Control type="Text" placeholder="Enter AdminUsername" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="mt-3">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </>

        <div className="d-grid gap-2 mt-4">
          <Button variant="primary" size="lg" type="submit" style={{ borderRadius: "0.375rem" }}>
            Login
          </Button>
          <Button variant="secondary" size="lg" type="reset" style={{ borderRadius: "0.375rem", marginTop: "10px" }}>
            Reset
          </Button>
        </div>

        <div className="mt-3">
          <Link to="/Signup" className="text-decoration-none" style={{ color: "#fff" }}>
            Don't have an account? Sign Up
          </Link>
        </div>
      </Container>
    </div>
  );
}
