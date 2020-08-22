import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { setTopicLogin } from '../../../redux/modals/credentialsModal/credentialsModal.actions';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = ({ setTopicLogin }) => {

  const [credentials, setCredentials] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Loged in');
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className='credentials-modal--register'>
      <Form onSubmit={handleSubmit} className='mb-3'>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username *</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password *</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password *</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            value={credentials.password2}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="submit-button text-center">
          <Button variant="danger" type="submit" block>
            Register
          </Button>
        </div>
      </Form>

      <div className='text-center'>
        or <button onClick={() => setTopicLogin(true)} className='btn btn-link p-0 m-0 text-danger pb-1'><u>Log In</u></button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTopicLogin: topic => dispatch(setTopicLogin(topic))
});

export default connect(null, mapDispatchToProps)(Register);
