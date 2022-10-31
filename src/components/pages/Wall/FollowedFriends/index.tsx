import { Card, Container, Table, Button } from "react-bootstrap";
import { FC } from "react";
import { useUsers } from "../../../../hooks";

type Prop = {
  onRemove: () => void;
};
const FollowedFriends: FC<Prop> = ({ onRemove }) => {
  return (
    <Container>
      <Table>
        <tbody>
          {/* {newUser &&
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
            })} */}
        </tbody>
      </Table>
    </Container>
  );
};
export { FollowedFriends };
