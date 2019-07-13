import axios from 'axios';
import apiKeys from './apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getMyMovies = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movieList.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const movieListResults = results.data;
      const myMoviesList = [];
      Object.keys(movieListResults).forEach((listMovieId) => {
        movieListResults[listMovieId].id = listMovieId;
        myMoviesList.push(movieListResults[listMovieId]);
      });
      console.error(movieListResults);
      resolve(myMoviesList);
    })
    .catch(err => reject(err));
});

export default { getMyMovies };
