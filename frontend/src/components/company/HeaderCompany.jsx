import { NavLink, useLocation } from "react-router-dom";
import "../../styles/components/company/headerCompany.css";
import Logo from "../../assets/logo.png";

function HeaderCompany() {

  return (
    <header>
      <img src={Logo} />
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/entreprise/profil"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entreprise/offres"
              className={({isActive}) =>
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

export default HeaderCompany;