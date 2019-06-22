// import firebase from 'firebase/app';
import util from '../../helpers/util';
import addMovie from '../../helpers/data/moviesData';
import showMovies from './movies';

const inputValuesCollected = (e) => {
  e.preventDefault();
  const newMovie = {
    title: document.getElementById('movieTitleInput').value,
    imageUrl: document.getElementById('movieUrl').value,
    mpaaRating: document.getElementById('movieRatingInput').value,
    genre: document.getElementById('movieGenreInput').value,
    time: document.getElementById('movieTimeInput').value,
  };
  addMovie.addNewMovie(newMovie)
    .then(() => {
      showMovies.showAllMovies();
    })
    .catch(err => console.error('no new movies', err));
};

const addNewMovieFormBuilder = (uid) => {
  console.error(uid);
  let domString = '';
  domString += '<form>';
  domString += '<label for="movieTitleInput">Movie Title</label>';
  domString += '<input id="movieTitleInput">';
  domString += '<label for="movieUrl"> Movie URL</label>';
  domString += '<input id="movieUrl">';
  domString += '<label for="movieRatingInput">Rating</label>';
  domString += '<input id="movieRatingInput">';
  domString += '<label for="movieGenreInput">Genre</label>';
  domString += '<input id="movieGenreInput">';
  domString += '<label for="movieTimeInput">Time</label>';
  domString += '<input id="movieTimeInput">';
  domString += '<button type="submit" id="addNewMovieBtn">Submit</button>';
  domString += '</form>';
  util.printToDom('newMovieForm', domString);
  document.getElementById('addNewMovieBtn').addEventListener('click', inputValuesCollected);
};

export default { addNewMovieFormBuilder };
