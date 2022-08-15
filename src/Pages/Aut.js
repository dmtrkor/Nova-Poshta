import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Aut() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="autEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="autPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Authorise
            </Button>
        </Form>
    );
}

export default Aut;