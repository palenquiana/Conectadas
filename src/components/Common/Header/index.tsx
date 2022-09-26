import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="navbar-brand">
        <button onClick={() => navigate("/wall", { replace: true })}></button>

        {children}
      </header>
    </>
  );
};
export { Header };
