import {Dimensions} from 'react-native';

export const primaryColor = '#ffb43a';
export const secondaryColor = '#F9F9F9';
export const bgColor = '#272833';
export const bgColorSecondary = '#313347';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const padSize = 15;
export const marSize = 15;
export const boRadSize = 15;

export const date = new Date();
export const getYear = date.getFullYear();
export const getMonth = date.getMonth()+1;
export const getTotalDate = new Date(getYear, getMonth, 0).getDate()+1;
export const getDate = date.getDate();
export const getMonthName = date.toLocaleString('default', {month: 'short'});
export const getTime = date.getHours() + '.' + date.getMinutes();

export const fonts = {
  light: 'Raleway-Light',
  regular: 'Raleway-Regular',
  semibold: 'Raleway-SemiBold',
  bold: 'Raleway-Bold',
};

export const urlMovie = (path) =>
  `https://api.themoviedb.org/3/${path}?api_key=${urlMovieApiKey}`;

export const urlMoviePopular = (path) =>
  `https://api.themoviedb.org/3/movie/${path}?api_key=${urlMovieApiKey}&language=en-US&page=1`;

export const urlMovieDetail = (path) =>
  `https://api.themoviedb.org/3/movie/${path}?api_key=${urlMovieApiKey}&language=en-US`;

export const urlMovieCredits = (path) =>
  `https://api.themoviedb.org/3/movie/${path}?api_key=${urlMovieApiKey}&language=en-US`;

export const urlMovieGenre = (path) =>
  `https://api.themoviedb.org/3/${path}?api_key=${urlMovieApiKey}&language=en-US`;

export const urlMovieTopRated = (path) =>
  `https://api.themoviedb.org/3/${path}?api_key=${urlMovieApiKey}&language=en-US&page=1`;

export const urlMovieApiKey = '714ff558a29dba1466ed38b64e9b209b';
export const urlMovieImage = 'https://image.tmdb.org/t/p/w500';

export const urlMovieToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTRmZjU1OGEyOWRiYTE0NjZlZDM4YjY0ZTliMjA5YiIsInN1YiI6IjVlYWJkOWJiYzhhMmQ0MDAxZTRhNzYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YlZAdvqDPC3mFlhH23yXB51kO7EMxWrseEfAErui0_Q';
