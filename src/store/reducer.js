import {combineReducers} from 'redux';

import {SET_IMAGES, SET_DETAILS} from './actionTypes';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        data: state.data.concat(action.data),
      };

    default:
      return state;
  }
};

export default combineReducers({
  redux: reducer,
});
