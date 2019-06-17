import firebase from 'firebase/app';
import 'firebase/auth';
import movies from '../../components/movies/movies';
import addNewMovie from '../../components/movies/addNewMovie';

const authDiv = document.getElementById('auth');
const moviesDiv = document.getElementById('movies');
const formHeadingDiv = document.getElementById('form-heading');
const addMovieDiv = document.getElementById('newMovieForm');
const logoutlink = document.getElementById('nav-logout');
const movieLink = document.getElementById('nav-movies');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      moviesDiv.classList.remove('hide');
      formHeadingDiv.classList.remove('hide');
      addMovieDiv.classList.remove('hide');
      logoutlink.classList.remove('hide');
      movieLink.classList.remove('hide');
      addNewMovie.addNewMovieFormBuilder(user.uid);
      movies.showAllMovies(user.uid); // may pass data later
    } else {
      authDiv.classList.remove('hide');
      moviesDiv.classList.add('hide');
      formHeadingDiv.classList.add('hide');
      addMovieDiv.classList.add('hide');
      logoutlink.classList.add('hide');
      movieLink.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
