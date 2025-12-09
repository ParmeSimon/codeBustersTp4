import { NavLink } from "react-router-dom";
import style from "../../../styles/Company.module.css";
import Logo from "../../../assets/logo.png";

function HeaderCompany() {
  return (
    <header>
      <img src={Logo} />
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink
              to="/entreprise/profil"
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? style.activeLink : ""}`
              }
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entreprise/offres"
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

export default HeaderCompany;
