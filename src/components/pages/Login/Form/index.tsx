import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const FormLogin = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg="4">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre de usuario"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="pass">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="pass"
                />
              </Form.Group>
              <Button type="submit">Ingresar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export { FormLogin };
