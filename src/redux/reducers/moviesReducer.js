import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_MOVIE_SUCCESS
} from '../constants';

const initialState = {
  isFetching: false,
  movies: [],
  oneMovie: null,
  isMovie: true,
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
        isMovie: action.isMovie,
        error: false
      }
    case FETCHING_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        oneMovie: action.payload
      }
    default:
      return state;
  }
};