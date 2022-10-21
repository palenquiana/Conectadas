import { moviesRequest } from "@api";
import { Movie } from "@types";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { CardMovie } from "../Card";

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
      <Row>
        <Col>
          <Form>
            <Form.Control
              type="text"
              placeholder="Buscar película"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <Row xs={1} md={2} className="g-4">
              {searchedMovie &&
                searchedMovie.map((movie) => (
                  <Col>
                    <CardMovie
                      title={movie.title}
                      description={movie.overview}
                      image={movie.poster_path}
                      key={movie.id}
                    />
                  </Col>
                ))}
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export { SearchMovie };
