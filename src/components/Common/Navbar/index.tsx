import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav className="justify-content-end">
        <NavLink className="nav-link" to="/wall">
          Inicio
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Ingresar
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Registro
        </NavLink>
        <NavLink className="nav-link" to="/find">
          Buscar amigxs
        </NavLink>
        <NavLink className="nav-link" to="/logout">
          Cerrar sesión
        </NavLink>
      </Nav>
    </>
  );
};
export { Navbar };
