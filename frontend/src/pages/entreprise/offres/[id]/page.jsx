import HeaderCompany from "../../../../components/company/HeaderCompany";
import '../../../../styles/pages/company/offers/detail/style.css';

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, WorkIcon, Location06Icon } from "@hugeicons/core-free-icons";
import PopupUpdateOfferCompany from "../../../../components/company/PopupUpdateOfferCompany";
import PopupDeleteOfferCompany from "../../../../components/company/PopupDeleteOfferCompany";
import { useState, useEffect } from "react";
import { useOffers } from "../../../../hooks/useoffers";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
function CompanyOfferDetailsPage() {
  const { getOfferDetail, offerDetail, deleteOffer, updateOffer } = useOffers();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [offer, setOffer] = useState({
    companyID: "",
    contractType: "",
    createdAt: "",
    description: "",
    id: "",
    keywords: [],
    location: "",
    title: "",
    updatedAt: "",
    _count: {
      applications: 0,
    },
  });

  useEffect(() => {
    getOfferDetail(id).then((response) => {
      setOffer(response);
    });
  }, [id]);

  const validateDeleteOffer = async () => {
    const response = await deleteOffer(id);
    if (response.success) {
      setShowDeletePopup(false);
      enqueueSnackbar("Offre supprimée avec succès", { variant: "success" });
      navigate('/entreprise/offres');
    } else {
      enqueueSnackbar(response.error || "Erreur lors de la suppression", { variant: "error" });
    }
  };

  const cancelDeleteOffer = () => {
    setShowDeletePopup(false);
  };

  const handleUpdateOffer = async (updatedOffer) => {
    const response = await updateOffer(id, updatedOffer);
    if (response.success) {
      enqueueSnackbar("Offre modifiée avec succès", { variant: "success" });
      setOffer(response.data.offer);
    } else {
      enqueueSnackbar(response.error || "Erreur lors de la modification", { variant: "error" });
    }
    setShowUpdatePopup(false);
  };

  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);


  return (
    <div className="company-details-offer">
      <HeaderCompany />
      <div className="card">
        <div className="header">
          <HugeiconsIcon icon={ArrowLeft01Icon} onClick={() => navigate('/entreprise/offres')} />
          <h3>{offer.title}</h3>
        </div>
        <div className="main">
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className="detail">
            <p>Le {new Date(offer.createdAt).toLocaleDateString()}</p>
            <h4>{offer.title}</h4>
            <div className="contract">
              <HugeiconsIcon icon={WorkIcon} color="#b497cd" />
              <p>Type de contrat : {offer.contractType}</p>
            </div>
            <div className="localisation">
              <HugeiconsIcon icon={Location06Icon} color="#b497cd" />
              <p>{offer.location}</p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="description">
            <h4>Description de l'offre</h4>
            <p>
              {offer.description}
            </p>
          </div>
          <div className="cardKeywords">
            <h4>Mots-clés</h4>
            <div className="keywords">
              {(offer.keywords || []).map((keyword, index) => (
                <p key={`${keyword}-${index}`}>{keyword}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="actions">
          <button
            className="modify-btn"
            onClick={() => setShowUpdatePopup(true)}
          >
            Modifier l'offre
          </button>
          <button
            className="delete-btn"
            onClick={() => setShowDeletePopup(true)}
          >
            Supprimer l'offre
          </button>
        </div>
      </div>

      {/* Popups */}
      {showUpdatePopup && (
        <PopupUpdateOfferCompany onClose={() => setShowUpdatePopup(false)} offer={offer} setOffer={handleUpdateOffer} />
      )}
      {showDeletePopup && (
        <PopupDeleteOfferCompany validateDeleteOffer={validateDeleteOffer} cancelDeleteOffer={cancelDeleteOffer} />
      )}
    </div>
  );
}

export default CompanyOfferDetailsPage;