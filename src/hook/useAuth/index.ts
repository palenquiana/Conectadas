import { usersApi } from "@api";
import { LoginFormType, SignUpPayload, User } from "@types";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [me, setMe] = useState<User>();

  const setUserToken = async (id: string) => {
    const newToken = Math.random().toString(36).substring(2);
    const resp = await usersApi.patch(id, { sessionToken: newToken });
    return resp ? newToken : null;
  };
  const login = async ({ email, pass }: LoginFormType) => {
    useEffect(() => {
      loginWithToken();
    }, []);
    const users = await usersApi.getAll();
    if (users) {
      const logged = users.find(
        (user) => user.email === email && user.password === pass
      );

      if (logged) {
        const token = await setUserToken(logged.id);
        if (token) {
          localStorage.setItem("user-token", token);
          setMe(logged);
        }
      }
    }

    const loginWithToken = async () => {
      const users = await usersApi.getAll();
      const storedToken = localStorage.getItem("user-token");
      const logged = users.find((user) => user.sessionToken === storedToken);
      if (!me && logged) {
        setMe(logged);
      }
    };
  };
  const logout = (id: string) => {
    usersApi.patch(id, { sessionToken: null });
  };
  const sigup = async (user: SignUpPayload) => {
    const addUser = await usersApi.add(user);
  };

  return { login, logout, sigup };
};
export { useAuth };
