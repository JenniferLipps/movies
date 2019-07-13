import myMovieList from '../../helpers/data/myMovieListData';
import getMovies from '../../helpers/data/moviesData';
import util from '../../helpers/util';

const printMyMovies = (userMovies) => {
  let domString = '';
  userMovies.forEach((movie) => {
    domString += '<div class="card col-3">';
    domString += `<h4 class="card-title">${movie.title}</h4>`;
    domString += `<img src=${movie.imageUrl}>`;
    domString += `<div>Genre: ${movie.genre}</div>`;
    domString += `<div>MPAA rating: ${movie.mpaaRating}</div>`;
    domString += `<div>Run time: ${movie.time} minutes</div>`;
    domString += '</div>';
  });
  util.printToDom('userMovieList', domString);
};

const displayMyMovies = (uid) => {
  myMovieList.getMyMovies(uid)
    .then((myMoviesList) => {
      console.error(myMoviesList);
      getMovies.getMovies()
        .then((movies) => {
          const smashedMovies = movies.map((movie) => {
            const m = movie;
            const userMovie = myMoviesList.find(userMovieItem => movie.id === userMovieItem.movieId); // eslint-disable-line
            if (userMovie) {
              m.movieListId = userMovie.id;
              m.movieIsWatched = userMovie.isWatched;
              m.movieRate = userMovie.rateValue;
            }
            return m;
          });
          const userMovies = smashedMovies.filter(movie => movie.movieListId);
          console.error(userMovies);
          printMyMovies(userMovies);
        })
        .catch();
    })
    .catch();
};

export default { displayMyMovies };
