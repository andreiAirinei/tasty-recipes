import React from 'react';

// Redux
import { connect } from 'react-redux';
import { setTopicLogin } from '../../../redux/modals/credentialsModal/credentialsModal.actions';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = ({ setTopicLogin }) => {
  return (
    <div className='credentials-modal--register'>
      <Form className='mb-3'>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email *</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username *</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password *</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password *</Form.Label>
          <Form.Control type="password" />
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
