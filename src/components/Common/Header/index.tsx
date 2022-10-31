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
        <div className=" d-inline-flex ">
          <div>
            <h1 className="title d-inline-flex me-5 ">
              <button
                onClick={() => navigate("/wall", { replace: true })}
                className="btn fs-1"
              >
                Conectadas
              </button>
            </h1>
          </div>
          {children}
        </div>
      </header>
    </>
  );
};
export { Header };
