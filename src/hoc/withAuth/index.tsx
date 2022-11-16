import { FC, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts";

const publicRoutes = ["/login", "/sigup"];

const withAuth = (Component: FC): FC => {
  const Autenticated: FC = (): any => {
    const { me } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
      if (me && publicRoutes.includes(location.pathname)) {
        navigate("/wall");
      }
      if (!me && !publicRoutes.includes(location.pathname)) navigate("/login");
    }, [me]);

    return <Component />;
  };
  return Autenticated;
};
export { withAuth };
