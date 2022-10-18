import { FC, ReactNode } from "react";
import { Container, Form } from "react-bootstrap";
type Prop = {
  children: ReactNode;
};
const SearchMovie: FC<Prop> = ({ children }) => {
  return (
    <Container>
      <Form>
        <Form.Control type="text" placeholder="Buscar película" />
      </Form>
      {children}
    </Container>
  );
};
export { SearchMovie };
