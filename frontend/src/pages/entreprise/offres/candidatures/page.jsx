import "../../../../styles/pages/company/offers/candidature/style.css";
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
    <div className="candidatures-page">
      <HeaderCompany />

      {/* Offer Header Card */}
      <div className="card">
        <div className="header">
          <HugeiconsIcon icon={ArrowLeft01Icon} />
          <h3>Candidature - 4</h3>
        </div>
        <div className="main">
            <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
            <p className="time-info">2h</p>

          <h2 className="offer-title">Développeur Python/Django - Lyon</h2>
          <p className="offer-description">
            CDI pour un développeur Python expérimenté. Travail sur des
            applications web avec Django et PostgreSQL.
          </p>

          <button className="see-offer-btn">Voir l'offre</button>
        </div>
        </div>

        {/* Candidates Grid */}
        <div className="candidates-grid">
          {candidates.map((candidate, idx) => (
            <div className="candidate-card" key={idx}>
              {/* Profile Header */}
              <div className="candidate-header">
                <div className="icon-wrapper">
                  <HugeiconsIcon icon={UserIcon} size={20} />
                </div>
                <h4 className="candidate-name">{candidate.name}</h4>
              </div>

              {/* Status Buttons */}
              <div className="status-row">
                <button className={`status-btn status-active`}>
                  Reçu
                </button>
                <button className="status-btn">En cours d'examen</button>
                <button className="status-btn">Entretien</button>
                <button className="status-btn">Accepté</button>
              </div>

              {/* Links */}
              <div className="links-row">
                <button className="link-btn">
                  <HugeiconsIcon icon={DocumentValidationIcon} size={24} />
                  CV
                </button>
                <button className="link-btn">
                  <HugeiconsIcon icon={GithubIcon} size={24} />
                  Github
                </button>
                <button className="link-btn">
                  <HugeiconsIcon icon={BrowserIcon} size={24} />
                  Portfolio
                </button>
              </div>

              {/* Skills Tags */}
              <div className="skills-tags-row">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Docker</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
