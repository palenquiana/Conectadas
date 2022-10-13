import { Layout } from "@components/common";
import { SigUp } from "@components/Forms/SigUp";
import { SignUpPayload } from "@types";

const ViewSigUp = () => {
  const onSubmit = (formData: SignUpPayload) => {};
  return (
    <>
      <Layout>
        <SigUp onSigUp={onSubmit} />
      </Layout>
    </>
  );
};
export { ViewSigUp };
