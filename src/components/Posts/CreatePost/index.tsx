import { PostPayload } from "@types";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { usePost } from "../../../hook";
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
              <Card>
                <Card.Title>¿Qué te gustaría compartirnos?</Card.Title>
                <Form.Control
                  type="text"
                  placeholder="Ingresa el título de tu publicación"
                  {...register("title")}
                ></Form.Control>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("detail")}
                ></Form.Control>
                <Button type="submit">Publicar</Button>
              </Card>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export { CreatePost };
