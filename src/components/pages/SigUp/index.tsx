import { Layout } from "../../common";
import { SigUp } from "../../Forms";
import { SignUpPayload } from "@types";
import { useAuth } from "../../../hook";

const ViewSigUp = () => {
  const { sigup } = useAuth();
  const onSubmit = (formData: SignUpPayload) => {
    console.log(formData);

    sigup(formData);
  };
  return (
    <>
      <Layout hideHeader hideNav>
        <SigUp onSigUp={onSubmit} />
      </Layout>
    </>
  );
};
export { ViewSigUp };
