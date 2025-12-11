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
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [applicationToDelete, setApplicationToDelete] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    contractType: '',
    location: '',
    applied: ''
  });
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
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => {
      const matchesSearch = filters.search === '' || 
      offer.title.toLowerCase().includes(filters.search.toLowerCase())

      const matchesContractType = filters.contractType === '' ||
        offer.contractType === filters.contractType;

      const matchesLocation = filters.location === '' ||
        offer.location.toLowerCase().includes(filters.location.toLowerCase());

      const isApplied = applications.some(app => app.offerId === offer.id);
      const matchesApplied = filters.applied === '' ||
        (filters.applied === 'Mes candidatures' && isApplied) ||
        (filters.applied === 'Pas candidater' && !isApplied);

      // Retourner true seulement si tous les filtres correspondent
      return matchesSearch && matchesContractType && matchesLocation && matchesApplied;
    });
    setFilteredOffers(filteredOffers);
  }, [filters, offers, applications]);
  return (
    <div className="studentOffer">
      <HeaderStudent />

      {/* Filters */}
      <form className="form">
        {/* Search */}
        <div className="inputWrapper">
          <input type="search" placeholder="Rechercher un poste" className="formSearch" value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} />
          <HugeiconsIcon icon={Search01Icon} />
        </div>
        <div className="subfilter">
          {/* Type de contrat */}
          <select value={filters.contractType} onChange={(e) => setFilters({ ...filters, contractType: e.target.value })}>
            <option value="">Type de contrat</option>
            <option value="STAGE">STAGE</option>
            <option value="ALTERNANCE">ALTERNANCE</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
          </select>

          {/* Mes candidatures ou non */}
          <select value={filters.applied} onChange={(e) => setFilters({ ...filters, applied: e.target.value })}>
            <option value="">Toutes</option>
            <option value="Mes candidatures">Mes candidatures</option>
            <option value="Pas candidater">Pas candidater</option>
          </select>

          {/* Localisation */}
          <div className="inputWrapper">
            <input type="search" placeholder="Localisation" className="localisation" value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })} />
            <HugeiconsIcon icon={Location06Icon} />
          </div>
        </div>
      </form>

      {/* Offers */}
      <ShowOffers
        offers={filteredOffers}
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
