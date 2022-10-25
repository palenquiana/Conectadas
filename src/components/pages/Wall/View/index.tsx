import { Layout } from "../../../common";
import { Col, Container, Row } from "react-bootstrap";
import { FriendRecomendations } from "../Recomendations";
import { useState } from "react";
import { FollowedFriends } from "../FollowedFriends";

const Wall = () => {
  const [isActive, setIsActive] = useState(false);
  // const [userEnviado, setUserEnviado] = useState<User>();

  return (
    <Layout page="wall">
      <Container>
        <Row>
          <Col>
            <FriendRecomendations
              onSendUser={() => setIsActive((prevstate) => !prevstate)}
            />
            <FollowedFriends
              onRemove={() => setIsActive((prevstate) => !prevstate)}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export { Wall };
