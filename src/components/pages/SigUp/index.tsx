import { Layout } from "../../common";
import { SigUp } from "../../Forms";
import { SignUpPayload } from "@types";
import { useAuth } from "../../../hook";
import { useNavigate } from "react-router-dom";

const ViewSigUp = () => {
  const { sigup } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (formData: SignUpPayload) => {
    sigup(formData);
    navigate("/login");
  };
  return (
    <>
      <Layout hideHeader hideNav page="sigup">
        <SigUp onSigUp={onSubmit} />
      </Layout>
    </>
  );
};
export { ViewSigUp };
