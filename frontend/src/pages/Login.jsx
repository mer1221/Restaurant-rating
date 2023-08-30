import React, { useState } from 'react';
import { Container, Col, Row, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!credentials.email || !emailRegex.test(credentials.email)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!credentials.password || !passwordRegex.test(credentials.password)) {
      setErrors((prev) => ({
        ...prev,
        password:
          'Password must be at least 8 characters long and contain at least one uppercase letter, one digit, and one special character'
      }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }

    // Login logic here

    // Display alert message
    setAlertMessage('You have logged in successfully!');
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                {alertMessage && <p className="alert">{alertMessage}</p>}
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit">
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;