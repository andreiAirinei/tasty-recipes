import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';

// Redux
import { connect } from 'react-redux';
import { modalClose } from '../../redux/videoModal/videoModal.actions';

// Bootstrap Components
import Modal from 'react-bootstrap/Modal';

const VideoModal = ({ active, videoURL, modalClose }) => {

  const onHide = () => modalClose();

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={active}
      onHide={onHide}
    >
      <Modal.Header closeButton className='p-0 pr-2' />
      <Modal.Body className='p-0'>
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
