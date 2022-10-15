import { Layout } from "../../../components/common";
import { SigUp } from "../../Forms";
import { SignUpPayload } from "@types";

const ViewSigUp = () => {
  const onSubmit = (formData: SignUpPayload) => {};
  return (
    <>
      <Layout hideHeader hideNav>
        <SigUp onSigUp={onSubmit} />
      </Layout>
    </>
  );
};
export { ViewSigUp };
