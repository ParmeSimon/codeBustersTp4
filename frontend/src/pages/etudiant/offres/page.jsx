import { useEffect } from "react";
import '../../../styles/pages/student/offers/style.css';
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
  useEffect(() => {
    getAllOffers();
  }, []);


  return (
    <div className="student-offer">
      <HeaderStudent />

      {/* Filters */}
      <form className="form">
        {/* Search */}
        <div className="inputWrapper">
          <input type="search" placeholder="Rechercher un poste" className="formSearch" />
          <HugeiconsIcon icon={Search01Icon} />
        </div>
        <div className="subfilter">
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
          <div className="inputWrapper">
            <input type="search" placeholder="Localisation" className="localisation" />
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
