import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <header>
      <button onClick={() => navigate("/wall", { replace: true })}>
        <h1>ConectADAs</h1>
      </button>

      {children}
    </header>
  );
};
export { Header };
