import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {
    const {createUser}=useContext(AuthContext);
  const [accept, setAccept]=useState(false);
        const handleRegister =event=>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log( name, photo, email, password);
            createUser(email, password)
            .then(result=>{
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error=>{
                console.error(error);
            })
        }

const handleAccepted=(event)=>{
  setAccept(event.target.checked);
}
  return (
    <Container className="mx-auto w-50 border p-3">
      <h3> Please Register!!!</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo url</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Enter photo url" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>}/>
        </Form.Group>
        <Button disabled={!accept} variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <Form.Text className="text-primay">
        Already Have an Account? <Link to="/login">Login</Link>{" "}
      </Form.Text>
    </Container>
  );
};

export default Register;
