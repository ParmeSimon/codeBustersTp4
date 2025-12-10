import style from "../../styles/company.module.css";
import HeaderCompany from "./widgets/HeaderCompany";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, WorkIcon, Location06Icon } from "@hugeicons/core-free-icons";
import PopupUpdateOfferCompany from "./widgets/PopupUpdateOfferCompany";
import PopupDeleteOfferCompany from "./widgets/PopupDeleteOfferCompany";
import { useState } from "react";

function CompanyOfferDetailsPage() {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <div className={style.companyDetailsOffer}>
      <HeaderCompany />
      <div className={style.card}>
        <div className={style.header}>
          <HugeiconsIcon icon={ArrowLeft01Icon} />
          <h3>Stagiaire Développeur Front-End</h3>
        </div>
        <div className={style.main}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <p>Le 10/10/2025</p>
            <h4>Stagiaire Développeur Front-End</h4>
            <div className={style.contract}>
              <HugeiconsIcon icon={WorkIcon} color="#b497cd" />
              <p>Type de contrat : Stage</p>
            </div>
            <div className={style.localisation}>
              <HugeiconsIcon icon={Location06Icon} color="#b497cd" />
              <p>Paris</p>
            </div>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.description}>
            <h4>Description de l'offre</h4>
            <p>
              Stage de 6 mois pour développer des interfaces utilisateur
              modernes avec React et TypeScript.
            </p>
          </div>
          <div className={style.cardKeywords}>
            <h4>Mots-clés</h4>
            <div className={style.keywords}>
              <p>CDI</p>
              <p>Python</p>
              <p>Django</p>
              <p>Backend</p>
            </div>
          </div>
        </div>
        <div className={style.actions}>
          <button
            className={style.modifyBtn}
            onClick={() => setShowUpdatePopup(true)}
          >
            Modifier l'offre
          </button>
          <button
            className={style.deleteBtn}
            onClick={() => setShowDeletePopup(true)}
          >
            Supprimer l'offre
          </button>
        </div>
      </div>

      {/* Popups */}
      {showUpdatePopup && (
        <PopupUpdateOfferCompany onClose={() => setShowUpdatePopup(false)} />
      )}
      {showDeletePopup && (
        <PopupDeleteOfferCompany onClose={() => setShowDeletePopup(false)} />
      )}
    </div>
  );
}

export default CompanyOfferDetailsPage;