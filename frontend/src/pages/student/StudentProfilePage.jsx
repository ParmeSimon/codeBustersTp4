import style from "../../styles/StudentProfilePage.module.css";
import Logo from "../../assets/logo.png";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  DocumentValidationIcon,
  GithubIcon,
  BrowserIcon,
} from "@hugeicons/core-free-icons";

function StudentProfilePage() {
  return (
    <div className={style.studentProfile}>
      <img src={Logo} />
      {/* Profil */}
      <section className={style.profileCard}>
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
    </div>
  );
}

export default StudentProfilePage;
