import { FC } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import { useUsers } from "../../../../hooks";

const FriendRecomendations = () => {
  const { users } = useUsers();

  return (
    <Card className="justify-content-center p-2">
      <Card.Title>Usuarios recomendados</Card.Title>
      <Card.Subtitle>Seguí a personas para ver su contenido</Card.Subtitle>
      <Table>
        <tbody>
          <>
            {users &&
              users.map((user) => {
                console.log(user);
                return (
                  <>
                    <tr key={user.id}>
                      <td>
                        {user.name} {user.lastname}
                      </td>
                      <td>
                        <Button>+</Button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </>
        </tbody>
      </Table>
    </Card>
  );
};
export { FriendRecomendations };
