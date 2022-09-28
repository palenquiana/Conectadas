import { FC } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { LoginFormType } from "../../../types";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
type Props = {
  onLogin: (formData: LoginFormType) => void;
};

const Login: FC<Props> = ({ onLogin }) => {
  const { register, handleSubmit, formState } = useForm<LoginFormType>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg="4">
            <Card className="text-center p-3">
              <Card.Title className="fs-2 m-4">Conectadas</Card.Title>
              <Form onSubmit={handleSubmit(onLogin)}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    {...register("email")}
                  />
                  {formState.errors.email?.message}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    {...register("pass")}
                  />
                  {formState.errors.pass?.message}
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
export { Login };
