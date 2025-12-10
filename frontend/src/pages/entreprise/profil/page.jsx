import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  Link02Icon,
  Location01Icon,
  File01Icon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import PopupEditProfileCompany from "../../../components/company/PopupEditProfileCompany";
import HeaderCompany from "../../../components/company/HeaderCompany";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../../../styles/pages/company/profile/style.css";

function CompanyProfilePage() {
  const [showPopup, setShowPopup] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className="company-profile">
      <HeaderCompany />
      {/* Profil */}
      <section className="profile-card">
        <button type="button" onClick={() => setShowPopup(true)}>
          <HugeiconsIcon icon={Settings02Icon} />
        </button>

        <div className="icon">
          <HugeiconsIcon icon={UserIcon} size={36} />
        </div>

        <h2 className="profile-name">Entreprise2</h2>
        <p className="profile-email">Entreprise2.group2@ekod.fr</p>
      </section>

      {/* Localisation / Description / Site */}
      <section className="profile-links">
        <a className="profile-link">
          <HugeiconsIcon icon={Location01Icon} color="#b497cd" />
          Paris
        </a>
        <a className="profile-link">
          <HugeiconsIcon icon={File01Icon} color="#b497cd" />
          Entreprise innovante dans le domaine de la technologie.
        </a>
        <a className="profile-link">
          <HugeiconsIcon icon={Link02Icon} color="#b497cd" />
          https://digitalagency.example.com
        </a>
      </section>
      <button onClick={handleLogout} className="disconnect-button">Déconnexion</button>

      {/* Popup pour modifier le profil */}
      {showPopup && (
        <PopupEditProfileCompany onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default CompanyProfilePage;
