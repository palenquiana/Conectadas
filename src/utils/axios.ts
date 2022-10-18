import axios from "axios";
const apiDB = axios.create({
  baseURL: "https://conectadas-5487f-default-rtdb.firebaseio.com",
});

const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "8032955e28b375544291f4ac8643d42d",
  },
});
export { apiDB, apiMovies };
