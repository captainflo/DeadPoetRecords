import { MUSIC, ALL_MUSIC, MUSIC_ERROR } from '../actions/types';
const INITIAL_STATE = {
  audio: '',
  allMusic: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case MUSIC:
      return { ...state, audio: action.payload || false };
    case ALL_MUSIC:
      return { ...state, allMusic: action.payload || false };
    case MUSIC_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
