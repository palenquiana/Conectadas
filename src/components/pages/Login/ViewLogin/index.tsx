import { LoginFormType } from "../../../../types";
import { Layout } from "../../../common";
import { Login } from "../../../Forms/Login";

const ViewLogin = () => {
  const onSubmit = (formData: LoginFormType) => {};
  return (
    <Layout hideHeader hideNav page="login">
      <Login onLogin={onSubmit} />
    </Layout>
  );
};
export { ViewLogin };
