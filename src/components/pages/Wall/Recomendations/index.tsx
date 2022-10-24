import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { User } from "@types";
import { usersApi } from "@api";

const FriendRecomendations = () => {
  const [userUnFollowed, setUserUnfullowed] = useState<User[]>([]);
  // const [userFilter, setUserFilter] = useState([]);

  const catchUser = async () => {
    const response = await usersApi.getAll();

    return response;
  };
  useEffect(() => {
    userUnFollowed &&
      catchUser().then((data) => {
        setUserUnfullowed(data);
      });
  }, []);

  return (
    <Card>
      <>
        <Card.Title>Usuarios recomendados</Card.Title>
        <Card.Subtitle>Seguí a personas para ver su contenido</Card.Subtitle>
        <Card>
          <>
            {userUnFollowed &&
              userUnFollowed.map((user) => {
                return (
                  <>
                    <Card>
                      <Card.Title>{user.name}</Card.Title>
                      <Button>+</Button>
                      {/* <Form.Control type="text" value={user.name + user.lastname}>
                      {user.name + user.lastname}
                    </Form.Control>
                    <Button>+</Button> */}
                    </Card>
                    ;
                  </>
                );
              })}
          </>
        </Card>
      </>
    </Card>
  );
};
export { FriendRecomendations };
