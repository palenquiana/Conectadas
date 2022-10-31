import { Post, User } from "@types";
import { createContext, FC, ReactNode, useState } from "react";

type StoreType = {
  users: User[];
  userUpdate: (user: User[]) => void;
  posts: Post[];
  postUpdate: (post: Post[]) => void;
};
const StoreContext = createContext<StoreType>({
  users: [],
  posts: [],
  userUpdate: () => {},
  postUpdate: () => {},
});
type Props = {
  children: ReactNode;
};
const StoreProvider: FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPost] = useState<Post[]>([]);
  const userUpdate = (user: User[]) => {
    setUsers(user);
  };
  const postUpdate = (post: Post[]) => {
    setPost(post);
  };

  return (
    <StoreContext.Provider value={{ users, posts, userUpdate, postUpdate }}>
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext, StoreProvider };
