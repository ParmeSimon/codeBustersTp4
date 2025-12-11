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
import useStudentProfile from "../../../hooks/useStudentProfile";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { PopupDelete } from "../../../components/offers/PopupDelete";

function page() {
  const { getAllOffers, offers, loading } = useOffers();
  const { isStudent, isCompany } = useAuth();
  const { getApplications, deleteApplication } = useStudentProfile();
  const { enqueueSnackbar } = useSnackbar();
  const [applications, setApplications] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [applicationToDelete, setApplicationToDelete] = useState(null);
  useEffect(() => {
    getAllOffers();
  }, []);

  useEffect(() => {
    const loadApplications = async () => {
      const data = await getApplications();
      setApplications(data);
    };
    loadApplications();
  }, []);

  const handleDeleteApplication = (applicationId) => {
    setApplicationToDelete(applicationId);
    setShowDeletePopup(true);
  };

  const confirmDeleteApplication = async () => {
    if (applicationToDelete) {
      const result = await deleteApplication(applicationToDelete);
      if (result.success) {
        enqueueSnackbar("Candidature supprimée avec succès", { variant: "success" });
        // Recharger les candidatures
        const data = await getApplications();
        setApplications(data);
      } else {
        enqueueSnackbar(result.error || "Erreur lors de la suppression", { variant: "error" });
      }
    }
    setShowDeletePopup(false);
    setApplicationToDelete(null);
  };

  const cancelDeleteApplication = () => {
    setShowDeletePopup(false);
    setApplicationToDelete(null);
  };

  return (
    <div className="studentOffer">
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
      <ShowOffers
        offers={offers}
        loading={loading}
        isStudent={isStudent}
        isCompany={isCompany}
        applications={applications}
        onDeleteApplication={handleDeleteApplication}
      />

      {/* Popup de confirmation de suppression */}
      {showDeletePopup && (
        <PopupDelete
          title="Supprimer la candidature"
          message="Êtes-vous sûr de vouloir supprimer cette candidature ? Cette action est irréversible."
          onConfirm={confirmDeleteApplication}
          onCancel={cancelDeleteApplication}
        />
      )}

    </div>
  );
}

export default page;
