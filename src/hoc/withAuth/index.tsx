import { FC } from "react";
const publicRoutes = ["/login", "/sigup"];

const withAuth = (Component: FC): FC => {
  const Autenticated: FC = (): any => {
    return <Component />;
  };
  return Autenticated;
};
export { withAuth };
