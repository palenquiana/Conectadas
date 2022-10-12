import { LoginFormType } from "@types";
import { Layout } from "../../../common";
import { Login } from "../../../Forms/Login";

const ViewLogin = () => {
  const onSubmit = (formData: LoginFormType) => {
    console.log(formData);
  };
  return (
    <Layout hideNav page="login">
      <Login onLogin={onSubmit} />
    </Layout>
  );
};
export { ViewLogin };
