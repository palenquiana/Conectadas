import { apiMovies } from "@utils";

const searchMovies = async (query: string, page: string) => {
  const response = await apiMovies.get("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export const moviesRequest = { searchMovies };
