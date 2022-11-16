import { LoginFormType } from "@types";
import { Layout } from "../../common";
import { Login } from "../../Forms/Login";
import { useAuth } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { withAuth } from "@hoc";

const ViewLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (formData: LoginFormType) => {
    login(formData);
    navigate("/wall");
  };
  return (
    <Layout hideHeader hideNav page="login">
      <Login onLogin={onSubmit} />
    </Layout>
  );
};
export const LoginPage = withAuth(ViewLogin);
