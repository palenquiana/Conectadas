import { Layout } from "../../../common";
import { Col, Container, Row } from "react-bootstrap";
import { FriendRecomendations } from "../Recomendations";
import { CreatePost, SharePublication } from "../../../Posts";

const Wall = () => {
  return (
    <Layout page="wall">
      <Container>
        <Row>
          <Row>
            <Col md={3}>
              <FriendRecomendations />
            </Col>
            <Col md={9}>
              <CreatePost />
              <SharePublication />
            </Col>
          </Row>
        </Row>
      </Container>
    </Layout>
  );
};

export { Wall };
