import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS
} from '../constants';

const initialState = {
  isFetching: false,
  movies: [],
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload,
        error: false
      }
    default:
      return state;
  }
};