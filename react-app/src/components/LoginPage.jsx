import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

export default function LoginPage() {
    return (
        <Container>
            <Row className="justify-content-md-center my-5">
                <Col xs={6}>
                <h1>Sign in</h1>
                <p>Stay updated on your proffesional world</p>
                <Form>
                     <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                     <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password" />
                     </Form.Group>
                </Form>
                <a href="">Forgot password?</a>
                <Button variant="primary" size="lg" block>
                    Sign in
                </Button>
                </Col>
            </Row>
        </Container>
    )
}
