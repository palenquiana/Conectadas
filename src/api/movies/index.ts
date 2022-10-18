import { mapToArray } from "@helpers";
import { apiMovies } from "src/utils/axios";

const searchMovie = async (query: string, page: string) => {
  const response = await apiMovies.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return mapToArray(response.data);
};

export const moviesRequest = { searchMovie };
