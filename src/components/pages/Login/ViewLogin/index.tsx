import { LoginFormType } from "@types";
import { Layout } from "@components/common";
import { Login } from "../../../Forms/Login";
import { useAuth } from "src/hook/useAuth";

const ViewLogin = () => {
  const { login } = useAuth();
  const onSubmit = (formData: LoginFormType) => {
    login(formData);
  };
  return (
    <Layout hideNav page="login">
      <Login onLogin={onSubmit} />
    </Layout>
  );
};
export { ViewLogin };
