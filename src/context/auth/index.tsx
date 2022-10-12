import { User } from "@types";
import { createContext, FC, ReactNode, useState } from "react";

type AuthContenteType = {
  me?: User;
  setCurrentUser?: (user: User) => void;
};
const AuthContext = createContext<AuthContenteType>({
  me: undefined,
  setCurrentUser: undefined,
});

type Props = {
  children: ReactNode;
};
const AuthProvider: FC<Props> = ({ children }) => {
  const [me, setMe] = useState<User>();
  const setCurrentUser = (newUser: User) => {
    setMe(newUser);
  };

  return (
    <AuthContext.Provider value={{ me, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
