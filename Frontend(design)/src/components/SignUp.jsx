import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export function SignUp() {
  return (
    <Container className="mt-4 p-3 rounded" style={{ width: "500px", backgroundColor: "rgba(84, 84, 84, 0.7)" }}>
      <h2 className="mb-4">Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="button" className="mb-2">
            Sign Up
          </Button>
          <Button variant="secondary" type="button" className="mb-2">
            Clear
          </Button>
        </div>
      </Form>
    </Container>
  );
}
