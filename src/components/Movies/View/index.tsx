import { moviesRequest } from "@api";
import { Layout } from "../../common";
import { Movie } from "@types";
import { useEffect, useState } from "react";
import { CardMovie } from "../Card";
import { SearchMovie } from "../Search";

const ViewMovies = () => {
  // const initialData = {
  //   image: "",
  //   title: "",
  //   description: "",
  // };
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    moviesRequest.getMovie().then((data) => {
      console.log(data);
      setMovies(data);
    });
  }, []);
  return (
    <Layout page="movies">
      <SearchMovie>
        {movies &&
          movies.map((movie) => (
            <CardMovie
              title={movie.title}
              description={movie.description}
              image={movie.image}
              key={movie.title}
            />
          ))}
      </SearchMovie>
    </Layout>
  );
};
export { ViewMovies };
