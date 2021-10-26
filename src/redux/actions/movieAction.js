import axios from 'axios';
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
  urlMovieCredits,
  urlMovieDetail,
  urlMovieGenre,
  urlMoviePopular,
  urlMovieTopRated,
} from '../../utils';

export const GET_POPULAR_MOVIE = 'GET_POPULAR_MOVIE';
export const GET_TOP_RATED_MOVIE = 'GET_TOP_RATED_MOVIE';
export const GET_MOVIE_GENRE = 'GET_MOVIE_GENRE';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const GET_MOVIE_CREDITS = 'GET_MOVIE_CREDITS';

export const getPopularMovie = () => (dispatch) => {
  dispatchLoading(dispatch, GET_POPULAR_MOVIE);

  axios({
    method: 'GET',
    url: urlMoviePopular('popular'),
  })
    .then((res) => {
      // console.log(res);
      dispatchSuccess(dispatch, GET_POPULAR_MOVIE, res.data.results);
    })
    .catch((err) => {
      dispatchError(dispatch, GET_POPULAR_MOVIE, err.toString());
    });
};

export const getMovieGenre = () => (dispatch) => {
  dispatchLoading(dispatch, GET_MOVIE_GENRE);

  axios({
    method: 'GET',
    url: urlMovieGenre('genre/movie/list'),
  })
    .then((res) => {
      // console.log(res);
      dispatchSuccess(dispatch, GET_MOVIE_GENRE, res.data.genres);
    })
    .catch((err) => {
      dispatchError(dispatch, GET_MOVIE_GENRE, err.toString());
    });
};

export const getMovieTopRated = () => (dispatch) => {
  dispatchLoading(dispatch, GET_TOP_RATED_MOVIE);

  axios({
    method: 'GET',
    url: urlMovieTopRated('movie/top_rated'),
  })
    .then((res) => {
      // console.log(res);
      dispatchSuccess(dispatch, GET_TOP_RATED_MOVIE, res.data.results);
    })
    .catch((err) => {
      dispatchError(dispatch, GET_TOP_RATED_MOVIE, err.toString());
    });
};

export const getMovieDetail = (id) => (dispatch) => {
  dispatchLoading(dispatch, GET_MOVIE_DETAIL);

  axios({
    method: 'GET',
    url: urlMovieDetail(id),
  })
    .then((res) => {
      // console.log(res);
      dispatchSuccess(dispatch, GET_MOVIE_DETAIL, res.data);
    })
    .catch((err) => {
      dispatchError(dispatch, GET_MOVIE_DETAIL, err.toString());
    });
};

export const getMovieCredits = (id) => (dispatch) => {
  dispatchLoading(dispatch, GET_MOVIE_CREDITS);

  axios({
    method: 'GET',
    url: urlMovieCredits(id + '/credits'),
  })
    .then((res) => {
      // console.log(res);
      dispatchSuccess(dispatch, GET_MOVIE_CREDITS, res.data);
    })
    .catch((err) => {
      dispatchError(dispatch, GET_MOVIE_CREDITS, err.toString());
    });
};
