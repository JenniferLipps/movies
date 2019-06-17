import movies from "../movies/movies";

// import Axios from "axios";

// // on navbar click, "movies" div is hidden and "myMoviesList" is unhidden

// // event listener that on click add class of hide to div id movies
// // on click to "movies" hides "myMoviesList"

// // myMovieListBtn click gets movie by id and adds to a new array based on uid
// // myMovieArray displays in the same way as displayMovies

// // cards displaying in list shoud have Rate button and stars

// how to store the movie entry with the uid?


const getMyMovies = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json?orderBy="id"&equalTo="${id}"`)
    .then((results) => {});
    .catch();
});
