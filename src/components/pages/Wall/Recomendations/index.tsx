import { FC } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useUsers } from "../../../../hook";
type Props = {
  onSendUser: (id: string) => void;
};
const FriendRecomendations: FC<Props> = ({ onSendUser }) => {
  const { userUnFollowed, singleDelete } = useUsers();

  return (
    <Container className=" d-flex justify-content-center ">
      <Card className="justify-content-center p-2">
        <Card.Title>Usuarios recomendados</Card.Title>
        <Card.Subtitle>Seguí a personas para ver su contenido</Card.Subtitle>
        <Table>
          <tbody>
            <>
              {userUnFollowed &&
                userUnFollowed.map((user) => {
                  return (
                    <>
                      <tr key={user.id}>
                        <td>{user.name + " " + user.lastname}</td>
                        <td>
                          <Button onClick={() => singleDelete(user.id)}>
                            +
                          </Button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </>
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};
export { FriendRecomendations };
