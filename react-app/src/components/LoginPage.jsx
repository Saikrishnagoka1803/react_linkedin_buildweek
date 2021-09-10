import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useState } from 'react';

export default function LoginPage() {

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return (
        <Container>
            <Row className="justify-content-md-center my-5">
                <Col xs={4} className="border border-white rounded-0 shadow py-3">
                        <h1>Sign in</h1>
                        <p>Stay updated on your proffesional world</p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="formGroupEmail">
                                    <Form.Control 
                                    required 
                                    type="email" 
                                    placeholder="Enter email" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid email address
                                    </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                    <Form.Control 
                                    required 
                                    type="password" 
                                    placeholder="Password" 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Password incorrect. Typos, am I right?
                                    </Form.Control.Feedback>
                            </Form.Group>
                        <a href="">Forgot password?</a>
                        <Button type="submit" variant="primary" size="lg" block>
                            Sign in
                        </Button>
                        </Form>
                </Col>
            </Row>
        </Container>
    )
}
