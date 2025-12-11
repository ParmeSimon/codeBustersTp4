import { NavLink } from "react-router-dom";
import "../../styles/components/student/headerStudent.css";
import Logo from "../../assets/logo.png";

function HeaderStudent() {
  return (
    <header>
      <img src={Logo} />
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/etudiant/profil"
              className={({ isActive }) =>
                `navLink ${isActive ? "activeLink" : ""}`
              }
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/etudiant/offres"
              className={({ isActive }) =>
                `navLink ${isActive ? "activeLink" : ""}`
              }
            >
              Offres
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderStudent;
