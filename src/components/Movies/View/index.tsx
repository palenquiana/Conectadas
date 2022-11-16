import { withAuth } from "@hoc";
import { Layout } from "../../common";
import { SearchMovies } from "../Search";

const ViewMovies = () => {
  return (
    <Layout page="movies">
      <SearchMovies />
    </Layout>
  );
};
export const Movies = withAuth(ViewMovies);
