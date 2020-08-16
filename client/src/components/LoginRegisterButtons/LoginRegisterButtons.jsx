import React, { Fragment } from 'react';
import { ReactComponent as UserIcon } from '../../assets/user_profile.svg';

// Redux
import { connect } from 'react-redux';
import { openModalCredentials } from '../../redux/modals/credentialsModal/credentialsModal.actions';

// Bootstrap
import Button from 'react-bootstrap/Button';

const LoginRegisterButtons = ({ openModalCredentials }) => {
  return (
    <Fragment>
      {/* Devices over 992px width*/}
      <div className="login-register--desktop d-none d-lg-block">
        <Button variant='light' className='mr-1' size='sm'>Login</Button>
        <Button variant='outline-danger' size='sm' className='text-dark'>Register</Button>
        {/* <Button variant='outline-danger' size='sm'>Logout</Button> */}
      </div>

      {/* Devices under 992px width */}
      <div className="login-register--mobile d-block d-lg-none">
        <Button onClick={openModalCredentials} variant='none'><UserIcon className='icon-large' /></Button>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  openModalCredentials: () => dispatch(openModalCredentials())
})

export default connect(null, mapDispatchToProps)(LoginRegisterButtons);
