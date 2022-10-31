import { FC, ReactNode } from "react";
import { Card } from "react-bootstrap";

type Prop = {
  image: string;
  title: string;
  description: string;
  children: ReactNode;
};
const CardMovie: FC<Prop> = ({ image, title, description, children }) => {
  return (
    <>
      <Card className="card-movie text-center mt-3 me-3 ">
        <Card.Img
          variant="top"
          src={`http://image.tmdb.org/t/p/w500${image}`}
          alt="movie-poster"
          className="img"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card className="d-block border-0 mb-2">{children}</Card>
      </Card>
    </>
  );
};
export { CardMovie };
