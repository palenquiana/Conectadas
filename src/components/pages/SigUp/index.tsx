import { Layout } from "../../common";
import { SigUp } from "../../Forms";
import { SignUpPayload } from "@types";
import { useAuth } from "../../../hook";

const ViewSigUp = () => {
  const { sigup } = useAuth();
  const onSubmit = (formData: SignUpPayload) => {
    sigup(formData);
  };
  return (
    <>
      <Layout>
        <SigUp onSigUp={onSubmit} />
      </Layout>
    </>
  );
};
export { ViewSigUp };
