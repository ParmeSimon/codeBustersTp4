import style from "../../styles/company.module.css";
import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  Link02Icon,
  Location01Icon,
  File01Icon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import PopupEditProfileCompany from "./widgets/PopupEditProfileCompany";
import HeaderCompany from "./widgets/HeaderCompany";

function CompanyProfilePage() {
  const [showPopup, setShowPopup] = useState(false);

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

      {/* Popup pour modifier le profil */}
      {showPopup && (
        <PopupEditProfileCompany onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default CompanyProfilePage;
