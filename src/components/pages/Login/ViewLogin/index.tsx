import { Layout } from "../../../common";
import { FormLogin } from "../Form";

const ViewLogin = () => {
  return (
    <Layout hideNav hideHeader page="login">
      <FormLogin />
    </Layout>
  );
};
export { ViewLogin };
