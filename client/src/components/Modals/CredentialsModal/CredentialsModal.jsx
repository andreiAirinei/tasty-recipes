import React from 'react';

// Redux
import { connect } from 'react-redux';
import { setClearBackground } from '../../../redux/ui/ui.actions';
import { closeModalCredentials } from '../../../redux/modals/credentialsModal/credentialsModal.actions';

// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CredentialsModal = ({ isActive, closeModalCredentials, setClearBackground }) => {

  const handleModalClose = () => {
    setClearBackground();
    closeModalCredentials();
  }

  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={isActive}
      onHide={handleModalClose}
      className='credentials-modal'
    >
      <Modal.Header closeButton className='border-0 pb-0'>
        <h4>Login</h4>
      </Modal.Header>
      <Modal.Body className='pt-0'>
        Modal Body
      </Modal.Body>
      <Modal.Footer className='border-0'>
        {/* <Button className='btn-dark text-size-09'>Close</Button> */}
      </Modal.Footer>
    </Modal>
  )
}

const mapStateToProps = state => ({
  isActive: state.credentialsModal.isActive
});

const mapDispatchToProps = dispatch => ({
  setClearBackground: () => dispatch(setClearBackground()),
  closeModalCredentials: () => dispatch(closeModalCredentials())
})

export default connect(mapStateToProps, mapDispatchToProps)(CredentialsModal);
