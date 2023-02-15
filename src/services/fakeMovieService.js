import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5d2d2d54g5bb2g157h5j8u512s2s5r5",
    title: "Terminator",
    genre: { _id: "5d2d2d54g5bb2g5h8885j8u512s2swww", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2010-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb2g5h54j81u512s2s5r6",
    title: "Die Hard",
    genre: { _id: "5d2d2d54g5bb2g5h8885j8u512s2swww", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.6,
    publishDate: "2011-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb12g5h5j58u512s2s5r7",
    title: "Mission Impossible",
    genre: { _id: "5d2d2d54g5bb2g5h8885j8u512s2swww", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 2.7,
    publishDate: "2012-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d541g5bb2g5h59j8u512s2s588",
    title: "Vacation",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2ssss", name: "Comedy" },
    numberInStock: 6,
    dailyRentalRate: 2.8,
    publishDate: "2013-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb2g5h5j18u5182s2s589",
    title: "Hang Over",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2ssss", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 3.5,
    publishDate: "2014-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d12d2d54g5bb2g5h5j8u512s2s590",
    title: "22 Jump Street",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2ssss", name: "Comedy" },
    numberInStock: 6,
    dailyRentalRate: 3.1,
    publishDate: "2015-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d21d2d54g5bb2g5h5j84u512s2s555",
    title: "Ice Age",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2sooo", name: "Animation" },
    numberInStock: 7,
    dailyRentalRate: 3.3,
    publishDate: "2016-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb2g5h5j8u2512s21s556",
    title: "Scooby Doo",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2sooo", name: "Animation" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2017-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb12g5h5j8u53112s2s557",
    title: "Zootopia",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2sooo", name: "Animation" },
    numberInStock: 5,
    dailyRentalRate: 4.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb2g5h5j8u51121s2s558",
    title: "Toy Story",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2sooo", name: "Animation" },
    numberInStock: 6,
    dailyRentalRate: 5.5,
    publishDate: "2019-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb2g5h5j81u6512s2s559",
    title: "Gotham by Gaslight",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2sooo", name: "Animation" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb2g5h15j78u512s2s559",
    title: "Jungle Cruise",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2saaa", name: "Adventure" },
    numberInStock: 3,
    dailyRentalRate: 2.5,
    publishDate: "2016-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb26g5h5j8u512s12s559",
    title: "Jumanji",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2saaa", name: "Adventure" },
    numberInStock: 4,
    dailyRentalRate: 2.5,
    publishDate: "2017-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "5d2d2d54g5bb2g5h5j8u13512s2s559",
    title: "Ben Hur",
    genre: { _id: "5d2d2d54g5bb2g5h5j8u512s2saaa", name: "Adventure" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2015-01-03T19:04:28.809Z",
    liked: false,
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
