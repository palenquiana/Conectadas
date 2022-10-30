import { Post, User } from "@types";
import { createContext, FC, ReactNode, useState } from "react";

type StoreType = {
  posts?: Post[];
  postsUpdate: (post: Post[]) => void;
  users?: User[];
  usersUpdate: (user: User[]) => void;
};
const StoreContext = createContext<StoreType>({
  //plura TODO
  posts: [],
  postsUpdate: () => {},
  users: [],
  usersUpdate: () => {},
});
type Props = {
  children: ReactNode;
};

const StoreProvider: FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>();
  const [users, setUsers] = useState<User[]>();
  const postsUpdate = (post: Post[]) => {
    setPosts(post);
  };
  const usersUpdate = (user: User[]) => {
    setUsers(user);
  };
  return (
    <StoreContext.Provider value={{ users, posts, usersUpdate, postsUpdate }}>
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext, StoreProvider };
