import { NavLink } from "react-router-dom";
import style from "../../../styles/student.module.css";
import Logo from "../../../assets/logo.png";

function HeaderStudent() {
  return (
    <header>
      <img src={Logo} />
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink
              to="/etudiant/profil"
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? style.activeLink : ""}`
              }
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/etudiant/offres"
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? style.activeLink : ""}`
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
