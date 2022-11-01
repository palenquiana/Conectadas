import { PostPayload } from "@types";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { usePost } from "../../../hooks";
import { defaultValues } from "./defaultValues";

const CreatePost = () => {
  const { sendPost } = usePost();

  const { register, handleSubmit } = useForm<PostPayload>({
    defaultValues,
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(sendPost)}>
              <Card className="p-3 ">
                <Card.Title>¿Qué te gustaría compartirnos?</Card.Title>
                <Card.Body>
                  <Form.Control
                    type="text"
                    className="mb-2"
                    placeholder="Ingresa el título de tu publicación"
                    {...register("title")}
                  ></Form.Control>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    {...register("detail")}
                  ></Form.Control>
                  <Card className="d-inline-flex border-0 mt-2">
                    <Button type="submit">Publicar</Button>
                  </Card>
                </Card.Body>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export { CreatePost };
