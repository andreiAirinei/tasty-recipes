import React from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  RedditIcon
} from 'react-share';

const ShareButtons = ({ size, shareURL }) => {
  return (
    <div className='social-media-buttons'>
      <FacebookShareButton url={shareURL} className='mr-1'>
        <FacebookIcon size={size} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={shareURL} className='mr-1'>
        <TwitterIcon size={size} round={true} />
      </TwitterShareButton>
      <PinterestShareButton media={shareURL} className='mr-1'>
        <PinterestIcon size={size} round={true} />
      </PinterestShareButton>
      <RedditShareButton url={shareURL} className='mr-1'>
        <RedditIcon size={size} round={true} />
      </RedditShareButton>
    </div>
  )
}

export default ShareButtons;
