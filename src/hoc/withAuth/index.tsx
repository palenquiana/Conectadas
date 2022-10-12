import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/hook";
const publicRoutes = ["/login", "/sigup"];

const withAuth = (Component: FC): FC => {
  const Autenticated: FC = (): any => {
    const { me } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
      if (me && publicRoutes.includes(location.pathname)) {
        navigate("/wall");
      }
      if (!me && !publicRoutes.includes(location.pathname)) navigate("/login");
      //faltan mas condiciones
    }, [me]);

    return <Component />;
  };
  return Autenticated;
};
export { withAuth };
