import firebase from 'firebase/app';
import 'firebase/auth';

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
    } else {
      authDiv.classList.remove('hide');
      moviesDiv.classList.add('hide');
      logoutlink.classList.add('hide');
      movieLink.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
