import { moviesRequest } from "@api";
import { Movie, PostPayload } from "@types";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuth, usePost } from "@hooks";
import { CardMovie } from "../Card";

const SearchMovies = () => {
  const [searchedMovie, setSearchedMovie] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const { sendPost } = usePost();
  const { me } = useAuth();

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
          </Form>
          <Container>
            <Row>
              {searchedMovie &&
                searchedMovie.map((movie) => (
                  <CardMovie
                    title={movie.title}
                    description={movie.overview}
                    image={movie.poster_path}
                    key={movie.id}
                  >
                    <Button
                      type="button"
                      className="btn"
                      onClick={() =>
                        me &&
                        sendPost({
                          title: movie.title,
                          date: new Date(),
                          detail: movie.overview,
                          image: movie.poster_path,
                          user: {
                            id: me.id,
                            lastname: me.lastname,
                            name: me.name,
                          },
                        })
                      }
                    >
                      Compartir
                    </Button>
                  </CardMovie>
                ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export { SearchMovies };
