import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS
} from '../constants';

const initialState = {
  isFetching: false,
  movies: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        movies: action.payload
      }
    default:
      return state;
  }
};