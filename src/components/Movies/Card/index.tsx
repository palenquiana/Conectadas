import { FC } from "react";
import { Card, CardImg } from "react-bootstrap";

type Prop = {
  image: string;
  title: string;
  description: string;
};
const CardMovie: FC<Prop> = ({ image, title, description }) => {
  return (
    <>
      <Card>
        <CardImg variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      {/* <div className="card">
        <img src={image} className="card-img" />
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div> */}
    </>
  );
};
export { CardMovie };
