import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <header className="navbar-brand">
      <button onClick={() => navigate("/wall", { replace: true })}>
        <i className="bi bi-exclude"></i>
        <h1>ConectADAs</h1>
      </button>
      {children}
    </header>
  );
};
export { Header };
