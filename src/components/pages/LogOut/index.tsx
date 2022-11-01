import { AuthContext } from "../../../contexts";
import { useAuth } from "../../../hooks";
import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const { logout } = useAuth();
  const { me } = useContext(AuthContext);

  useEffect(() => {
    me && logout(me.id);
  }, []);
  return <Spinner animation="grow" />;
};
export { LogOut };
