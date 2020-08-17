import React, { Fragment } from 'react';
import { ReactComponent as UserIcon } from '../../assets/user_profile.svg';

// Redux
import { connect } from 'react-redux';
import {
  openModalCredentials,
  setTopicLogin
} from '../../redux/modals/credentialsModal/credentialsModal.actions';

// Bootstrap
import Button from 'react-bootstrap/Button';

const LoginRegisterButtons = ({ openModalCredentials, setTopicLogin }) => {

  const handleClick = (e) => {
    e.target.id === 'registerBtn' ? setTopicLogin(false) : setTopicLogin(true);
    openModalCredentials();
  }

  return (
    <Fragment>
      {/* Devices over 992px width*/}
      <div className="login-register--desktop d-none d-lg-block">
        <Button onClick={handleClick} id='loginBtn' variant='light' className='mr-1' size='sm'>Login</Button>
        <Button onClick={handleClick} id='registerBtn' variant='outline-danger' size='sm' className='text-dark'>Register</Button>
        {/* <Button variant='outline-danger' size='sm'>Logout</Button> */}
      </div>

      {/* Devices under 992px width */}
      <div className="login-register--mobile d-block d-lg-none">
        <Button onClick={handleClick} id='profileBtn' variant='none' className='outline-none'><UserIcon className='icon-large' /></Button>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  setTopicLogin: topic => dispatch(setTopicLogin(topic)),
  openModalCredentials: () => dispatch(openModalCredentials())
})

export default connect(null, mapDispatchToProps)(LoginRegisterButtons);
