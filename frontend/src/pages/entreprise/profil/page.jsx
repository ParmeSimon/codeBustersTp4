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
import style from "../../../styles/company.module.css";

function CompanyProfilePage() {
  const [showPopup, setShowPopup] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <div className={style.CompanyProfile}>
      <HeaderCompany />
      {/* Profil */}
      <section className={style.profileCard}>
        <button type="button" onClick={() => setShowPopup(true)}>
          <HugeiconsIcon icon={Settings02Icon} />
        </button>

        <div className={style.icon}>
          <HugeiconsIcon icon={UserIcon} size={36} />
        </div>

        <h2 className={style.profileName}>Entreprise2</h2>
        <p className={style.profileEmail}>Entreprise2.group2@ekod.fr</p>
      </section>

      {/* Localisation / Description / Site */}
      <section className={style.profileLinks}>
        <a className={style.profileLink}>
          <HugeiconsIcon icon={Location01Icon} color="#b497cd" />
          Paris
        </a>
        <a className={style.profileLink}>
          <HugeiconsIcon icon={File01Icon} color="#b497cd" />
          Entreprise innovante dans le domaine de la technologie.
        </a>
        <a className={style.profileLink}>
          <HugeiconsIcon icon={Link02Icon} color="#b497cd" />
          https://digitalagency.example.com
        </a>
      </section>
      <button onClick={handleLogout} className={style.disconnectButton}>Déconnexion</button>

      {/* Popup pour modifier le profil */}
      {showPopup && (
        <PopupEditProfileCompany onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default CompanyProfilePage;
