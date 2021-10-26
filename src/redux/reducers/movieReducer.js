import {
  GET_POPULAR_MOVIE,
  GET_MOVIE_GENRE,
  GET_TOP_RATED_MOVIE,
  GET_MOVIE_DETAIL,
  GET_MOVIE_CREDITS,
} from '../actions';
const initialState = {
  getPopularMovieLoading: false,
  getPopularMovieData: false,
  getPopularMovieError: false,

  getMovieGenreLoading: false,
  getMovieGenreData: false,
  getMovieGenreError: false,

  getMovieTopRatedLoading: false,
  getMovieTopRatedData: false,
  getMovieTopRatedError: false,

  getMovieDetailLoading: false,
  getMovieDetailData: false,
  getMovieDetailError: false,

  getMovieCreditsLoading: false,
  getMovieCreditsData: false,
  getMovieCreditsError: false,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIE:
      return {
        ...state,
        getPopularMovieLoading: action.payload.loading,
        getPopularMovieData: action.payload.data,
        getPopularMovieError: action.payload.error,
      };

    case GET_MOVIE_GENRE:
      return {
        ...state,
        getMovieGenreLoading: action.payload.loading,
        getMovieGenreData: action.payload.data,
        getMovieGenreError: action.payload.error,
      };

    case GET_TOP_RATED_MOVIE:
      return {
        ...state,
        getMovieTopRatedLoading: action.payload.loading,
        getMovieTopRatedData: action.payload.data,
        getMovieTopRatedError: action.payload.error,
      };

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        getMovieDetailLoading: action.payload.loading,
        getMovieDetailData: action.payload.data,
        getMovieDetailError: action.payload.error,
      };

    case GET_MOVIE_CREDITS:
      return {
        ...state,
        getMovieCreditsLoading: action.payload.loading,
        getMovieCreditsData: action.payload.data,
        getMovieCreditsError: action.payload.error,
      };

    default:
      return state;
  }
};
