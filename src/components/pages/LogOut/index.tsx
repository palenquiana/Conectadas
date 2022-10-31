import { AuthContext } from "@contexts";
import { useAuth } from "@hooks";
import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const { logout } = useAuth();
  const { me } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    me && logout(me.id);
    navigate("/login", { replace: true });
  }, []);
  return <Spinner animation="grow" />;
};
export { LogOut };
