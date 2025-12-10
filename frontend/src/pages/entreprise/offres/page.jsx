import { useRef, useState } from "react";
import HeaderCompany from "../../../components/company/HeaderCompany";
import style from "../../../styles/company.module.css";
import "swiper/css";
import "swiper/css/navigation";

import { HugeiconsIcon } from "@hugeicons/react";
import { PropertyAddIcon } from "@hugeicons/core-free-icons";
import PopupAddOffersCompany from "../../../components/company/PopupAddOffersCompany";

function CompanyOffersPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={style.companyOffer}>
      <HeaderCompany />

      {/* Add Button */}
      <button type="button" className="addOfferBtn" onClick={() => setShowPopup(true)}>
        <HugeiconsIcon icon={PropertyAddIcon} />
      </button>
      {/* Offers */}
      <div className={style.offers}>
        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>
              CDI pour un développeur Python expérimenté. Travail sur des
              applications web avec Django et PostgreSQL.
            </p>
            <button className={style.seeOfferBtn}>Voir l'offre</button>
            <button className={style.applicationBtn}>4 candidatures</button>
          </div>
        </div>

        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>
              CDI pour un développeur Python expérimenté. Travail sur des
              applications web avec Django et PostgreSQL.
            </p>
            <button className={style.seeOfferBtn}>Voir l'offre</button>
            <button className={style.applicationBtn}>4 candidatures</button>
          </div>
        </div>

        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>
              CDI pour un développeur Python expérimenté. Travail sur des
              applications web avec Django et PostgreSQL.
            </p>
            <button className={style.seeOfferBtn}>Voir l'offre</button>
            <button className={style.applicationBtn}>4 candidatures</button>
          </div>
        </div>

        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>
              CDI pour un développeur Python expérimenté. Travail sur des
              applications web avec Django et PostgreSQL.
            </p>
            <button className={style.seeOfferBtn}>Voir l'offre</button>
            <button className={style.applicationBtn}>4 candidatures</button>
          </div>
        </div>

        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>
              CDI pour un développeur Python expérimenté. Travail sur des
              applications web avec Django et PostgreSQL.
            </p>
            <button className={style.seeOfferBtn}>Voir l'offre</button>
            <button className={style.applicationBtn}>4 candidatures</button>
          </div>
        </div>
      </div>

      {/* Popup pour ajouter une offre */}
      {showPopup && (
        <PopupAddOffersCompany onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default CompanyOffersPage;
