import { Layout } from "../../../common";
import { Col, Container, Row } from "react-bootstrap";
import { FriendRecomendations } from "../Recomendations";
import { CreatePost, SharePublication } from "../../../Posts";
import { withAuth } from "@hoc";

const WallPage = () => {
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

export const Wall = withAuth(WallPage);
