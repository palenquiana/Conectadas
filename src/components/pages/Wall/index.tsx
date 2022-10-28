import { Layout } from "@components/common";
import { Col, Container, Row } from "react-bootstrap";

const Wall = () => {
  return (
    <Layout page="wall">
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export { Wall };
