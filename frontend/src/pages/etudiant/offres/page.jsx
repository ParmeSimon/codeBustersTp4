import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from '../../../styles/student.module.css';
import HeaderStudent from "../../../components/student/HeaderStudent";
import { useOffers } from "../../../hooks/useoffers";
import LoadingSpinner from "../../../components/LoadingSpinner";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Location06Icon
} from "@hugeicons/core-free-icons";

function page() {
  const { getAllOffers, offers, loading } = useOffers();
  const navigate = useNavigate();
  
  // Charger les offres dès l'entrée sur la page
  useEffect(() => {
    getAllOffers();
  }, []);


  return (
    <div className={style.studentOffer}>
      <HeaderStudent />

      {/* Filters */}
      <form className={style.form}>
        {/* Search */}
        <div className={style.inputWrapper}>
          <input type="search" placeholder="Rechercher un poste" className={style.formSearch} />
          <HugeiconsIcon icon={Search01Icon} />
        </div>
        <div className={style.subfilter}>
          {/* Type de contrat */}
          <select>
            <option>Type de contrat</option>
            <option>STAGE</option>
            <option>ALTERNANCE</option>
            <option>CDI</option>
            <option>CDD</option>
          </select>

          {/* Mes candidatures ou non */}
          <select>
            <option>Toutes</option>
            <option>Mes candidatures</option>
            <option>Pas candidater</option>
          </select>

          {/* Localisation */}
          <div className={style.inputWrapper}>
            <input type="search" placeholder="Localisation" className={style.localisation} />
            <HugeiconsIcon icon={Location06Icon} />
          </div>
        </div>
      </form>

      {/* Offers */}
      <div className={style.offers}>
        {loading ? (
          <LoadingSpinner />
        ) : offers.length > 0 ? (
          offers.map((offer) => (
            <div key={offer.id} className={style.offer}>
              <img src={offer.imageUrl || "https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg"} alt={offer.title} />
              <div className={style.detail}>
                <h2>{offer.title} - {offer.location}</h2>
                <p>{offer.description}</p>
                <button className={style.viewOfferButton} onClick={() => navigate(`/etudiant/offres/${offer.id}`)}>Voir l'offre</button>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune offre disponible pour le moment.</p>
        )}
      </div>
    </div>
  );
}

export default page;
