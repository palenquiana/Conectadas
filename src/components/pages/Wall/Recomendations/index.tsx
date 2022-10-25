import { Button, Card, Container } from "react-bootstrap";
import { useUsers } from "../../../../hook";

const FriendRecomendations = () => {
  const { userUnFollowed } = useUsers();

  return (
    <Container className=" d-flex justify-content-center ">
      <Card className="justify-content-center p-2">
        <>
          <Card.Title>Usuarios recomendados</Card.Title>
          <Card.Subtitle>Seguí a personas para ver su contenido</Card.Subtitle>

          <>
            {userUnFollowed &&
              userUnFollowed.map((user) => {
                return (
                  <>
                    <Card
                      className="flex-row friend-recomendation "
                      key={user.id}
                    >
                      <Card.Title className="me-1 text-break">
                        {user.name + " " + user.lastname}
                      </Card.Title>
                      <Card className="border-0 ">
                        <Button>+</Button>
                      </Card>
                    </Card>
                  </>
                );
              })}
          </>
        </>
      </Card>
    </Container>
  );
};
export { FriendRecomendations };
