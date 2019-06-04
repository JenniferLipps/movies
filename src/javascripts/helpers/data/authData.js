import firebase from 'firebase/app';
import 'firebase/auth';
import movies from '../../components/movies/movies';

const authDiv = document.getElementById('auth');
const moviesDiv = document.getElementById('movies');
const logoutlink = document.getElementById('nav-logout');
const movieLink = document.getElementById('nav-movies');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      moviesDiv.classList.remove('hide');
      logoutlink.classList.remove('hide');
      movieLink.classList.remove('hide');
      movies.showAllMovies();
    } else {
      authDiv.classList.remove('hide');
      moviesDiv.classList.add('hide');
      logoutlink.classList.add('hide');
      movieLink.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
