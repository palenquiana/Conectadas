import { FC } from "react";
import { Card, CardGroup, CardImg } from "react-bootstrap";

type Prop = {
  image: string;
  title: string;
  description: string;
};
const CardMovie: FC<Prop> = ({ image, title, description }) => {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src={`http://image.tmdb.org/t/p/w500${image}`}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};
export { CardMovie };
