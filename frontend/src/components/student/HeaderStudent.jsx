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
                `nav-link ${isActive ? "active-link" : ""}`
              }
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/etudiant/offres"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
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
