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
  }, [youtubeURL]);

  const handleImageError = (e) => {
    console.log('error');
    e.target.src = 'https://i.ibb.co/9sYvpxK/logo.png';
  }

  const handleThumbnailClick = () => {
    setVideoURL(youtubeURL);
    modalOpen();
  }

  // YouTube broken links or thumbnails do no trigger onError, thus we have to check if the image loaded is the default YouTube broken thumbnail
  // const handleImageLoad = ({ target: img }) => {
  //   if (img.offsetHeight < 100) img.src = 'https://i.ibb.co/xL66Rsx/94116922-2541779732750087-1891164320511819776-n.jpg';
  // }

  return (
    <div className='video-slider-item m-2'>
      <div className="thumbnail" onClick={handleThumbnailClick}>
        <Image
          src={`https://img.youtube.com/vi/${youtubeID}/hqdefault.jpg`}
          rounded
          fluid
          onError={handleImageError}
        // onLoad={handleImageLoad}
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
