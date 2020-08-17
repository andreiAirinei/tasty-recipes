import React from 'react';

// Redux
import { connect } from 'react-redux';
import { setTopicLogin } from '../../../redux/modals/credentialsModal/credentialsModal.actions';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = ({ setTopicLogin }) => {
  return (
    <div className='credentials-modal--login'>
      <Form className='mb-3'>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="submit-button text-center">
          <Button variant="danger" type="submit" block>
            Log In
          </Button>
        </div>
      </Form>

      <div className='text-center my-4'>
        New to Tasty Recipes? <button onClick={() => setTopicLogin(false)} className='btn btn-link p-0 m-0 text-danger pb-1'><u>Create an account</u></button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTopicLogin: topic => dispatch(setTopicLogin(topic))
});

export default connect(null, mapDispatchToProps)(Login);
