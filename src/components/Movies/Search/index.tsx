import { moviesRequest } from "@api";
import { Movie } from "@types";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, PageItem, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useAuth, usePost } from "../../../hooks";
import { CardMovie } from "../Card";
import { PaginationMovie } from "../Pagination";

const SearchMovies = () => {
  const { me } = useAuth();
  const { sendPost } = usePost();
  const [searchedMovie, setSearchedMovie] = useState<Movie[]>();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    query &&
      moviesRequest
        .searchMovies(
          params.get("movie") || "",
          params.get("page") ? Number(params.get("page")) : 1
        )
        .then((data) => {
          setSearchedMovie(data.results);
        });
  }, [query, params]);

  const onSwitchPage = (page: number) => {
    setPage(page);
    params.set("page", page.toString());
    setParams(params);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Control
              type="text"
              placeholder="Buscar película"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                params.set("movie", e.target.value);
                setParams(params);
              }}
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
          <PaginationMovie
            current={Number(params.get("page"))}
            onChangePage={() => onSwitchPage}
            total={1000}
          />
        </Col>
      </Row>
    </Container>
  );
};
export { SearchMovies };
