import { moviesRequest } from "@api";
import { Movie } from "@types";
import { FC, FormEvent, ReactNode, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { CardMovie } from "../Card";
// type Prop = {
//   children: ReactNode;
//   // handleChange: () => void;
// };
const SearchMovie = () => {
  const [searchedMovie, setSearchedMovie] = useState<Movie[]>([]); //<Movie[]>
  const [query, setQuery] = useState("");

  useEffect(() => {
    query &&
      moviesRequest.searchMovies(query, "1").then((data) => {
        setSearchedMovie(data.results);
      });
  }, [query]);
  return (
    <Container>
      <Form>
        <Form.Control
          type="text"
          placeholder="Buscar película"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        {searchedMovie &&
          searchedMovie.map((movie) => (
            <CardMovie
              title={movie.title}
              description={movie.overview}
              image={movie.poster_path}
              key={movie.id}
            />
          ))}
      </Form>
    </Container>
  );
};
export { SearchMovie };
