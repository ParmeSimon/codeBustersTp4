import { NavLink, useLocation } from "react-router-dom";
import style from "../../../styles/Company.module.css";
import Logo from "../../../assets/logo.png";

function HeaderCompany() {
  const location = useLocation();
  
  // Le bouton "Offres" est actif si on est sur /entreprise/offres ou /entreprise/details-offre
  const isOffersActive = location.pathname === "/entreprise/offres" || location.pathname === "/entreprise/details-offre";

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
              className={() =>
                `${style.navLink} ${isOffersActive ? style.activeLink : ""}`
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