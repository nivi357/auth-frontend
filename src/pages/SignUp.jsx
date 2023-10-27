import React, { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import '../styles/SignUp.css';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""

  });

  const handelChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    });

  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  };
  return (
    <Container>
      <h1>Registeration From</h1>
      <Form onSubmit={handelSubmit}>
        <Form.Group>
          <Form.Label>
            Name
          </Form.Label>
          <Form.Control type='text' name='name' value={formData.name} onChange={handelChange} required />
        </Form.Group>


        <Form.Group>
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control type='email' name='email' value={formData.email} onChange={handelChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control type='password' name='password' value={formData.password} onChange={handelChange} required />
        </Form.Group>
        <Button variant='primary' type='submit'>Register</Button>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </Form>

    </Container>
  );
};

export default SignUp;