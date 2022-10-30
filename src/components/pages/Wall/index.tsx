import { Layout } from "../../common";
import { Col, Container, Row } from "react-bootstrap";
import { CreatePost, SharePublication } from "../../Posts";

const Wall = () => {
  return (
    <Layout page="wall">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <CreatePost />
            <SharePublication />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export { Wall };
