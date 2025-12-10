import style from "../../../../styles/company.module.css";
import HeaderCompany from "../../../../components/company/HeaderCompany";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  UserIcon,
  DocumentValidationIcon,
  GithubIcon,
  BrowserIcon,
} from "@hugeicons/core-free-icons";

const candidates = [
  { id: 1, name: "Étudiant Un group2" },
  { id: 2, name: "Étudiant Un group2" },
];

export default function CompanyOfferApplicationsPage() {
  return (
    <div className={style.candidaturesPage}>
      <HeaderCompany />

      {/* Offer Header Card */}
      <div className={style.card}>
        <div className={style.header}>
          <HugeiconsIcon icon={ArrowLeft01Icon} />
          <h3>Candidature - 4</h3>
        </div>
        <div className={style.main}>
            <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
            <p className={style.timeInfo}>2h</p>

          <h2 className={style.offerTitle}>Développeur Python/Django - Lyon</h2>
          <p className={style.offerDescription}>
            CDI pour un développeur Python expérimenté. Travail sur des
            applications web avec Django et PostgreSQL.
          </p>

          <button className={style.seeOfferBtn}>Voir l'offre</button>
        </div>
        </div>

        {/* Candidates Grid */}
        <div className={style.candidatesGrid}>
          {candidates.map((candidate, idx) => (
            <div className={style.candidateCard} key={idx}>
              {/* Profile Header */}
              <div className={style.candidateHeader}>
                <div className={style.iconWrapper}>
                  <HugeiconsIcon icon={UserIcon} size={20} />
                </div>
                <h4 className={style.candidateName}>{candidate.name}</h4>
              </div>

              {/* Status Buttons */}
              <div className={style.statusRow}>
                <button className={`${style.statusBtn} ${style.statusActive}`}>
                  Reçu
                </button>
                <button className={style.statusBtn}>En cours d'examen</button>
                <button className={style.statusBtn}>Entretien</button>
                <button className={style.statusBtn}>Accepté</button>
              </div>

              {/* Links */}
              <div className={style.linksRow}>
                <button className={style.linkBtn}>
                  <HugeiconsIcon icon={DocumentValidationIcon} size={24} />
                  CV
                </button>
                <button className={style.linkBtn}>
                  <HugeiconsIcon icon={GithubIcon} size={24} />
                  Github
                </button>
                <button className={style.linkBtn}>
                  <HugeiconsIcon icon={BrowserIcon} size={24} />
                  Portfolio
                </button>
              </div>

              {/* Skills Tags */}
              <div className={style.skillsTagsRow}>
                <span className={style.skillTag}>Python</span>
                <span className={style.skillTag}>Django</span>
                <span className={style.skillTag}>PostgreSQL</span>
                <span className={style.skillTag}>Docker</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
