import React, { useState, useEffect } from 'react';
import ReactLogo from '../../../../assets/play-button.svg'

// Redux
import { connect } from 'react-redux';
import {
  modalOpen,
  setVideoURL
} from '../../../../redux/videoModal/videoModal.actions';

// Bootstrap Components
import Image from 'react-bootstrap/Image';

const VideoSliderItem = ({
  youtubeURL,
  title,
  category,
  modalOpen,
  setVideoURL
}) => {
  const [youtubeID, setYoutubeID] = useState('');

  useEffect(() => {
    if (youtubeURL) setYoutubeID(youtubeURL.split('?v=')[1]);
  });

  const handleImageError = (e) => {
    // { e.target.onerror = null; e.target.src = "image_path_here" }
  }

  const handleThumbnailClick = () => {
    setVideoURL(youtubeURL);
    modalOpen();
  }

  return (
    <div className='video-slider-item m-2'>
      <div className="thumbnail" onClick={handleThumbnailClick}>
        <Image
          src={`https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`}
          rounded
          fluid
          onError={handleImageError}
        />
        <div className="overlay d-flex align-content-center align-items-center justify-content-center">
          <div className="overlay-image bg-white text-center">
            <img src={ReactLogo} alt="Play Button" />
          </div>
        </div>
      </div>
      <div className="body mt-3">
        <p className='text-danger l-spacing-2 mb-1'>{category}</p>
        <p className='text-size-1 mb-1'>{title}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  videoURL: state.videoModal.videoURL
});

const mapDispatchToProps = dispatch => ({
  modalOpen: () => dispatch(modalOpen()),
  setVideoURL: url => dispatch(setVideoURL(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoSliderItem);
