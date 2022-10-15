import { FC, useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationSchema";
import { SignUpPayload, Location } from "../../../types";
import { getLocation } from "../../../helpers";

type Props = {
  onSigUp: (formData: SignUpPayload) => void;
};

const SigUp: FC<Props> = ({ onSigUp }) => {
  const { register, handleSubmit, formState } = useForm<SignUpPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const [locations, setLocations] = useState<Location>();
  useEffect(() => {
    getLocation().then((data) => {
      setLocations(data);
    });
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center ">
          <Col lg="7">
            <Card className="text-center p-3 ">
              <Card.Title className="fs-2 mt-2 mb-2 title">
                Conectadas
              </Card.Title>
              <Card.Title className="fs-4 mt-1 mb-3 text-secondary">
                Registrate para ver fotos y videos de tus amigxs
              </Card.Title>

              <Form onSubmit={handleSubmit(onSigUp)}>
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Ingresá tu nombre"
                        {...register("name")}
                      />
                      {formState.errors.name?.message}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Ingresá tu correo electrónico"
                        {...register("email")}
                      />
                      {formState.errors.email?.message}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Select
                        aria-label="Seleccioná tu ciudad"
                        {...register("city")}
                      >
                        {locations?.cities.map((city) => (
                          <option value={city} key={city}>
                            {city}
                          </option>
                        ))}
                      </Form.Select>
                      {formState.errors.city?.message}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Ingresá tu apellido"
                        {...register("lastname")}
                      />
                      {formState.errors.lastname?.message}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña"
                        {...register("password")}
                      />
                      {formState.errors.password?.message}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="date"
                        placeholder="Seleccioná tu fecha de nacimiento"
                        {...register("birthdate")}
                      />
                      {formState.errors.birthdate?.message}
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Select
                        aria-label="Seleccioná tu país"
                        {...register("country")}
                      >
                        {locations?.countries.map((country) => (
                          <option value={country} key={country}>
                            {country}
                          </option>
                        ))}
                      </Form.Select>
                      {formState.errors.country?.message}
                    </Form.Group>
                  </Col>
                </Row>

                <Button type="submit">Registrarse</Button>
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
