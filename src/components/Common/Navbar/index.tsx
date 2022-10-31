import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faArrowRightFromBracket,
  faFilm,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Card className="d-inline-flex border-0 mt-3 cardNav ">
        <Nav>
          <NavLink className="nav-link" to="/wall">
            <FontAwesomeIcon
              icon={faHouseChimney}
              className="fs-5 text-dark text-opacity-75"
            />
          </NavLink>
          <NavLink className="nav-link" to="/find">
            <FontAwesomeIcon
              icon={faFilm}
              className="fs-5 text-dark text-opacity-75"
            />
          </NavLink>
          <NavLink className="nav-link" to="/login">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="fs-5 text-dark text-opacity-75"
            />
          </NavLink>

          <NavLink className="nav-link" to="/logout">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="fs-5 text-dark text-opacity-75"
            />
          </NavLink>
        </Nav>
      </Card>
    </>
  );
};
export { Navbar };
