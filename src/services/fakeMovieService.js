import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5d2d2d54g5bb2g15h5j8u512s2s5r5",
    title: "Terminator",
    genre: { _id: "5d2d2d54g5bb12g5h5j8u512s2swww", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb2g5h5j81u512s2s5r6",
    title: "Die Hard",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2s1www", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2011-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb12g5h5j8u512s2s5r7",
    title: "Mission Impossible",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u5112s2swww", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2012-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d541g5bb2g5h5j8u512s2s588",
    title: "Vacation",
    genre: { _id: "5d2d2d54g5bb2g5h5j81u512s2ssss", name: "Comedy" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2013-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb2g5h5j18u512s2s589",
    title: "Hang Over",
    genre: { _id: "5d2d2d54g5bb12g5h5j8u512s2ssss", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2014-01-03T19:04:28.809Z",
  },

  {
    _id: "5d12d2d54g5bb2g5h5j8u512s2s590",
    title: "22 Jump Street",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s21ssss", name: "Comedy" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2015-01-03T19:04:28.809Z",
  },

  {
    _id: "5d21d2d54g5bb2g5h5j8u512s2s555",
    title: "Ice Age",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2so1oo", name: "Animation" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2016-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb2g5h5j8u512s21s556",
    title: "Scooby Doo",
    genre: { _id: "5d2d2d54g51bb2g5h5j8u512s2sooo", name: "Animation" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2017-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb12g5h5j8u5112s2s557",
    title: "Zootopia",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u5121s2sooo", name: "Animation" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb2g5h5j8u5121s2s558",
    title: "Toy Story",
    genre: { _id: "5d2d2d54g5bb21g5h5j8u512s2sooo", name: "Animation" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb2g5h5j81u512s2s559",
    title: "Gotham by Gaslight",
    genre: { _id: "5d2d2d54g5bb2g5h15j8u512s2sooo", name: "Animation" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb2g5h15j8u512s2s559",
    title: "Jungle Cruise",
    genre: { _id: "5d2d12d54g5bb2g5h5j8u512s2saaa", name: "Adventure" },
    numberInStock: 3,
    dailyRentalRate: 2.5,
    publishDate: "2016-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb2g5h5j8u512s12s559",
    title: "Jumanji",
    genre: { _id: "5d2d2d54g5bb2g5h15j8u512s2saaa", name: "Adventure" },
    numberInStock: 4,
    dailyRentalRate: 2.5,
    publishDate: "2017-01-03T19:04:28.809Z",
  },

  {
    _id: "5d2d2d54g5bb2g5h5j8u1512s2s559",
    title: "Ben Hur",
    genre: { _id: "5d2d2d541g5bb2g5h5j8u512s2saaa", name: "Adventure" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2015-01-03T19:04:28.809Z",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
  }
}
