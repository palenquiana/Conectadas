import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <button onClick={() => navigate("/wall", { replace: true })}>
        <h1>ConectADAs</h1>
      </button>
    </header>
  );
};
export { Header };
