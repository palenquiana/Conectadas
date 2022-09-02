import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container-fluid">
          <NavLink to="/wall">Inicio</NavLink>
          <NavLink to="/login">Ingresar</NavLink>
          <NavLink to="/register">Registro</NavLink>
          <NavLink to="/find">Buscar amigxs</NavLink>
          <NavLink to="/logout">Cerrar sesión</NavLink>
        </div>
      </nav>
    </>
  );
};
export { Navbar };
