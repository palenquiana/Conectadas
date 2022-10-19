import { mapToArray } from "@helpers";
import { Movie } from "@types";
import { apiMovies } from "@utils";

const searchMovie = async (query: string, page: string) => {
  const response = await apiMovies.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return mapToArray(response.data);
};

const getMovie = async (): Promise<Movie[]> => {
  const response = await apiMovies.get(
    "https://api.themoviedb.org/3/movie/76341?api_key=8032955e28b375544291f4ac8643d42d"
  );

  return mapToArray(response.data);
};
export const moviesRequest = { searchMovie, getMovie };
