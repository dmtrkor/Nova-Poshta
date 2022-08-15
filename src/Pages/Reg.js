

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";

function Reg() {
    const [regEmail, changeConstEmail] = useState({
        email: '',
        isEmailValid: true,
        password: '',
        isPasswordValid: true,
        isFormValid: true
    })
    return (
        <Form>
            <Form.Group className="mb-1" controlId="regEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-1" controlId="regPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="regPasswordConfirm">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" >
                Register
            </Button>
        </Form>
    );
}

export default Reg;