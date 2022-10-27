import { User } from "@types";
import { createContext, FC, ReactNode, useState } from "react";

type UseUserType = {
  users: User[];
};
const UserContext = createContext<UseUserType>({
  users: [],
});
type Props = {
  children: ReactNode;
};
const UserProvider: FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
export { UserContext, UserProvider };
