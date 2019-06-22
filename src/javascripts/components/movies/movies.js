import firebase from 'firebase/app';
// import 'bootstrap';
// import './movies.scss';
import moviesData from '../../helpers/data/moviesData';
import myMoviesList from '../myMovieList/myMovieList';
import util from '../../helpers/util';

const displayMovies = (movies) => {
  let domString = '';
  movies.forEach((movie) => {
    domString += '<div class="card col-3">';
    domString += `<h4 class="card-title">${movie.title}</h4>`;
    domString += `<img src=${movie.imageUrl}>`;
    domString += `<div>Genre: ${movie.genre}</div>`;
    domString += `<div>MPAA rating: ${movie.mpaaRating}</div>`;
    domString += `<div>Run time: ${movie.time} minutes</div>`;
    domString += '<button id="myMovieListBtn">Add to My Movie List</button>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const showAllMovies = () => {
  myMoviesList.displayMyMovies(firebase.auth().currentUser.uid);
  moviesData.getMovies()
    .then((movies) => {
      displayMovies(movies);
    })
    .catch(err => console.error('no movies', err));
};

export default { showAllMovies };
