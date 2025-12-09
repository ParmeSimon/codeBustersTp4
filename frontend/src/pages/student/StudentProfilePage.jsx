import style from "../../styles/student.module.css";
import { useState, useEffect } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  DocumentValidationIcon,
  GithubIcon,
  BrowserIcon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import PopupEditProfileStudent from "./widgets/PopupEditProfileStudent";
import HeaderStudent from "./widgets/HeaderStudent";

function StudentProfilePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow || 'auto';
      };
    }
  }, [showPopup]);
  
  return (
    <div className={style.studentProfile}>
      <HeaderStudent />
      {/* Profil */}
      <section className={style.profileCard}>
        <button type="button" onClick={() => setShowPopup(true)}>
          <HugeiconsIcon icon={Settings02Icon} />
        </button>

        <div className={style.icon}>
          <HugeiconsIcon icon={UserIcon} size={36} />
        </div>

        <h2 className={style.profileName}>Étudiant Deux</h2>
        <p className={style.profileEmail}>student2.group2@ekod.fr</p>
      </section>

      {/* Liens CV / Github / Portfolio */}
      <section className={style.profileLinks}>
        <a className={style.profileLink}>
          <HugeiconsIcon icon={DocumentValidationIcon} color="#b497cd" />
          CV
        </a>
        <a className={style.profileLink}>
          <HugeiconsIcon icon={GithubIcon} color="#b497cd" />
          Github
        </a>
        <a className={style.profileLink}>
          <HugeiconsIcon icon={BrowserIcon} color="#b497cd" />
          Portfolio
        </a>
      </section>

      {/* Compétences */}
      <section className={style.skillsCard}>
        <h3 className={style.skillsTitle}>Mes compétences</h3>

        <div className={style.skillsList}>
          <span className={style.skillTag}>Python</span>
          <span className={style.skillTag}>Django</span>
          <span className={style.skillTag}>PostgreSQL</span>
          <span className={style.skillTag}>Docker</span>
        </div>
      </section>

      {/* Popup pour modifier le profil */}
      {showPopup && (
        <PopupEditProfileStudent onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default StudentProfilePage;
