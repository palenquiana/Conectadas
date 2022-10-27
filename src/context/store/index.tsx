import { Post, User } from "@types";
import { createContext, FC, ReactNode, useState } from "react";

type UseStoreType = {
  users: User[];
  posts: Post[];
};
const StoreContext = createContext<UseStoreType>({
  users: [],
  posts: [],
});
type Props = {
  children: ReactNode;
};
const StoreProvider: FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPost] = useState<Post[]>([]);
  return (
    <StoreContext.Provider value={{ users, posts }}>
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext, StoreProvider };
