import { usersApi } from "@api";
import { LoginFormType } from "@types";

const useAuth = () => {
  const login = async ({ email, pass }: LoginFormType) => {
    const users = await usersApi.getAll();
    const logged = users.find(
      (user) => user.email === email && user.password === pass
    );
    console.log(users);
  };
  return { login };
};
export { useAuth };
