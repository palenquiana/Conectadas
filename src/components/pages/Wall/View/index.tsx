import { Layout } from "../../../common";
import { Col, Container, Row } from "react-bootstrap";
import { FriendRecomendations } from "../Recomendations";

const Wall = () => {
  return (
    <Layout page="wall">
      <Container>
        <Row>
          <Col>
            <FriendRecomendations />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export { Wall };
