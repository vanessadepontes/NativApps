import {SET_IMAGES, SET_DETAILS} from './actionTypes';

export const setImages = data => {
  return {
    type: SET_IMAGES,
    data: data,
  };
};
