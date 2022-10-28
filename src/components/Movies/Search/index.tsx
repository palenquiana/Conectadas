import { moviesRequest } from "@api";
import { Movie } from "@types";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CardMovie } from "../Card";

const SearchMovies = () => {
  const [searchedMovie, setSearchedMovie] = useState<Movie[]>([]);
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
            <Container>
              <Row>
                {searchedMovie &&
                  searchedMovie.map((movie) => (
                    <>
                      <CardMovie
                        title={movie.title}
                        description={movie.overview}
                        image={movie.poster_path}
                        key={movie.id}
                      >
                        <Button type="submit" className="btn ">
                          Compartir
                        </Button>
                      </CardMovie>
                    </>
                  ))}
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export { SearchMovies };
