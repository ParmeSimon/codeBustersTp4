import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from '../../../styles/student.module.css';
import HeaderStudent from "../../../components/student/HeaderStudent";
import { useOffers } from "../../../hooks/useoffers";
import { useAuth } from "../../../hooks/useAuth";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Location06Icon
} from "@hugeicons/core-free-icons";
import ShowOffers from "../../../components/offers/showOffers";
function page() {
  const { getAllOffers, offers, loading } = useOffers();
  const { isStudent, isCompany } = useAuth();
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
      <ShowOffers offers={offers} loading={loading} isStudent={isStudent} isCompany={isCompany} />
      
    </div>
  );
}

export default page;
