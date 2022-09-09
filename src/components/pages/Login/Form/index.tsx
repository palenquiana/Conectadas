import { Button, Form } from "react-bootstrap";

const FormLogin = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre de usuario"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" />
        </Form.Group>
        <Button type="submit">Ingresar</Button>
      </Form>
    </>
  );
};
export { FormLogin };
