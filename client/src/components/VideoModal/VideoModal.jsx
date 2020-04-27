import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';

// Redux
import { connect } from 'react-redux';
import { modalClose } from '../../redux/videoModal/videoModal.actions';

// Components
import ReactLogo from '../../assets/close-button.svg';

// Bootstrap Components
import Modal from 'react-bootstrap/Modal';

const VideoModal = ({ active, videoURL, modalClose }) => {

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={active}
      onHide={modalClose}
    >
      <Modal.Body className='video-modal-body p-0'>
        <div className="modal-close">
          <button className='modal-close-btn' onClick={modalClose}>
            <img src={ReactLogo} alt="Button Close" />
          </button>
        </div>
        <YouTubePlayer
          url={videoURL}
          playing={true}
          controls
          volume={0.2}
          width='auto'
          height='500px'
        />
      </Modal.Body>
    </Modal>
  )
}

const mapStateToProps = state => ({
  active: state.videoModal.active,
  videoURL: state.videoModal.videoURL
});

const mapDispatchToProps = dispatch => ({
  modalClose: () => dispatch(modalClose())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal);
