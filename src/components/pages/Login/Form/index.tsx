import { Button, Form } from "react-bootstrap";

const FormLogin = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="name">Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre de usuario"
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="pass">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            name="pass"
          />
        </Form.Group>
        <Button type="submit">Ingresar</Button>
      </Form>
    </>
  );
};
export { FormLogin };
