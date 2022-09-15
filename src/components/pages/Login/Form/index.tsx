import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const FormLogin = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg="4">
            <Card className="text-center p-3">
              <Card.Title className="fs-2 m-4">Conectadas</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su correo electrónico"
                    name="name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    name="pass"
                  />
                </Form.Group>
                <Button type="submit">Ingresar</Button>
              </Form>
            </Card>

            <Card className="mt-3 p-2">
              <Card.Text>
                ¿No tenés una cuenta?
                <NavLink
                  className="stretched-link ms-1 fw-semibold text-decoration-none"
                  to="/register"
                >
                  Registrate
                </NavLink>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export { FormLogin };
