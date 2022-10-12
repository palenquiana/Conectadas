import { FC } from "react";
import { useAuth } from "src/hook";
const publicRoutes = ["/login", "/sigup"];

const withAuth = (Component: FC): FC => {
  const Autenticated: FC = (): any => {
    const {} = useAuth();
    return <Component />;
  };
  return Autenticated;
};
export { withAuth };
