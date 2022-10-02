import { FC } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { LoginFormType, SigUpType } from "../../../types";
import { yupResolver } from "@hookform/resolvers/yup";
// type Props = {
//   onLogin: (formData: SigUpType) => void;
// };

const SigUp = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg="7">
            <Card className="text-center p-3">
              <Card.Title className="fs-2 m-4">Conectadas</Card.Title>
              <Card.Title className="fs-4 mt-2 text-secondary">
                Registrate para ver fotos y videos de tus amigxs
              </Card.Title>

              <Form>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Ingresá tu nombre"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Ingresá tu correo electrónico"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Select aria-label="Seleccione su provincia"></Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Ingresá tu apellido"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Select aria-placeholder="Seleccioná tu ciudad"></Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="date"
                        placeholder="Seleccioná tu fecha de nacimiento"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Select aria-label="Seleccioná tu país"></Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Button type="submit">Ingresar</Button>
              </Form>
            </Card>

            <Card className="mt-3 p-2 text-center">
              <Card.Text>
                ¿Ya tenés una cuenta?
                <NavLink
                  className="stretched-link ms-1 fw-semibold text-decoration-none"
                  to="/sigup"
                >
                  Ingresá
                </NavLink>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export { SigUp };
