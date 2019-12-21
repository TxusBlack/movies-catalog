import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS
} from '../constants';

import axios from 'axios';
import { API_URL, API_KEY } from '../../config/api';

/**
 * Start of functions for connect with Redux
 */
export const fetchingData = () => {
  return { type: FETCHING_DATA }
}

export const fetchingDataSucces = (movies, isMovie) => {
  return { type: FETCHING_DATA_SUCCESS, payload: movies, isMovie: isMovie }
}

/**
 * Start actions of Redux
 */

export const getMovies = () => dispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(fetchingData());
      const movies = await axios.get(`${API_URL}movie/24428/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
      dispatch(fetchingDataSucces(movies.data.results, true));
      resolve();
    } catch (err) {
      reject();
    }
  })
}

export const search = (query, isMovie) => dispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(fetchingData());
      const movies = await axios.get(`${API_URL}search/${isMovie ? 'movie' : 'person'}?api_key=${API_KEY}&query=${query}&language=es`);
      dispatch(fetchingDataSucces(movies.data.results, isMovie));
      // console.log(movies.data.results);
      resolve();
    } catch (err) {
      reject();
    }
  });
}
