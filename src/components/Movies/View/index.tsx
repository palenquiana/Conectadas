import { moviesRequest } from "@api";
import { Layout } from "../../common";
import { Movie } from "@types";
import { useEffect, useState } from "react";
import { CardMovie } from "../Card";
import { SearchMovie } from "../Search";
import { useParams } from "react-router-dom";

const ViewMovies = () => {
  // const [movies, setMovies] = useState<Movie[]>();
  // // const { id } = useParams();

  // useEffect(() => {
  //   movies &&
  //     moviesRequest.getMovie("asdasd").then((data) => {
  //       console.log(data);
  //       setMovies(data);
  //     });
  // }, []);

  return (
    <Layout page="movies">
      <SearchMovie />
    </Layout>
  );
};
export { ViewMovies };
