import {
  MODAL_OPEN,
  MODAL_CLOSE,
  SET_VIDEO_URL
} from './videoModal.types';

export const modalOpen = () => ({ type: MODAL_OPEN });

export const modalClose = () => ({ type: MODAL_CLOSE });

export const setVideoURL = url => ({
  type: SET_VIDEO_URL,
  payload: url
});