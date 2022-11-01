import { LoginFormType } from "@types";
import { Layout } from "../../../common";
import { Login } from "../../../Forms/Login";
import { useAuth } from "../../../../hooks";

const ViewLogin = () => {
  const { login } = useAuth();
  const onSubmit = (formData: LoginFormType) => {
    login(formData);
  };
  return (
    <Layout hideHeader hideNav page="login">
      <Login onLogin={onSubmit} />
    </Layout>
  );
};
export { ViewLogin };
