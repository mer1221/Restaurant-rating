import React, { useState } from 'react';
import { Container, Col, Row, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Username validation: at least one uppercase, one lowercase
    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
    if (!usernameRegex.test(credentials.username)) {
      alert('Username must have at least one uppercase and one lowercase letter.');
      return;
    }

    // Password validation: at least one uppercase, one lowercase, one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/;
    if (!passwordRegex.test(credentials.password)) {
      alert(
        'Password must have at least one uppercase letter, one lowercase letter, and one special character.'
      );
      return;
    }

    // Validation passed, continue with form submission
    // You can add your form submission logic here
    alert('Registered successfully!');
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={registerImg} alt="" />
              </div>
              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder="username" required id="username" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit">
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;