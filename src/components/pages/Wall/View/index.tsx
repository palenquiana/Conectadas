import { Layout } from "../../../common";
import { Col, Container, Row } from "react-bootstrap";
import { FriendRecomendations } from "../Recomendations";
import { useState } from "react";
import { FollowedFriends } from "../FollowedFriends";

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
