import { usersApi } from "@api";
import { LoginFormType } from "@types";
import { useEffect } from "react";

const useAuth = () => {
  useEffect(() => {
    loginWithToken();
  }, []);
  const setUserToken = async (id: string) => {
    const newToken = Math.random().toString(36).substring(2);
    const resp = await usersApi.patch(id, { sessionToken: newToken });
    return resp ? newToken : null;
  };
  const login = async ({ email, pass }: LoginFormType) => {
    const users = await usersApi.getAll();
    const logged = users.find(
      (user) => user.email === email && user.password === pass
    );

    if (logged) {
      const token = await setUserToken(logged.id);
      if (token) {
        localStorage.setItem("user-token", token);
      }
    }
  };

  const loginWithToken = async () => {
    const users = await usersApi.getAll();
    const storedToken = localStorage.getItem("user-token");
    const logged = users.find((user) => user.sessionToken === storedToken);
  };
  const logout = () => {
    const resp = usersApi.patch("sadasd", { sessionToken: null });
  };

  return { login, logout };
};
export { useAuth };
