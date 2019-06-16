// import firebase from 'firebase/app';
import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

const displayMovies = (movies) => {
  let domString = '';
  movies.forEach((movie) => {
    domString += '<div class="card">';
    domString += `<div>${movie.title}</div>`;
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const showAllMovies = () => {
  moviesData.getMovies()
    .then((movies) => {
      displayMovies(movies);
    })
    .catch(err => console.error('no movies', err));
};

export default { showAllMovies };
