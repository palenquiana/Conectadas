import { Card, Container, Table, Button } from "react-bootstrap";
import { FC } from "react";
import { useUsers } from "../../../../hook";
import { User } from "@types";
type Prop = {
  // userAdded: string[];
  onRemove: () => void;
};
const FollowedFriends: FC<Prop> = ({ onRemove }) => {
  const { newUser } = useUsers();

  return (
    <Container>
      <Table>
        <tbody>
          {newUser &&
            newUser.map((user) => {
              return (
                <>
                  <tr>
                    <td>{user.name}</td>
                    <td>
                      <Button onClick={() => onRemove}>Delete</Button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};
export { FollowedFriends };
