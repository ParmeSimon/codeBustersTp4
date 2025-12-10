import HeaderCompany from "../../../../components/company/HeaderCompany";
import style from '../../../../styles/company.module.css';
import { Offer } from "../../../../components/offers/offer";
import PopupUpdateOfferCompany from "../../../../components/company/PopupUpdateOfferCompany";
import PopupDeleteOfferCompany from "../../../../components/company/PopupDeleteOfferCompany";
import { useState, useEffect } from "react";
import { useOffers } from "../../../../hooks/useoffers";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function CompanyOfferDetailsPage() {
  const { getOfferDetail, deleteOffer, updateOffer } = useOffers();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [offer, setOffer] = useState(null);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

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

  const handleModify = () => {
    setShowUpdatePopup(true);
  };

  const handleDelete = () => {
    setShowDeletePopup(true);
  };

  // Afficher un loader si les données ne sont pas encore chargées
  if (!offer) {
    return (
      <div className={style.companyDetailsOffer}>
        <HeaderCompany />
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div className={style.companyDetailsOffer}>
      <HeaderCompany />

      <Offer
        offer={offer}
        userType="company"
        style={style}
        onModify={handleModify}
        onDelete={handleDelete}
        backUrl="/entreprise/offres"
      />

      {/* Popups */}
      {showUpdatePopup && (
        <PopupUpdateOfferCompany
          onClose={() => setShowUpdatePopup(false)}
          offer={offer}
          setOffer={handleUpdateOffer}
        />
      )}
      {showDeletePopup && (
        <PopupDeleteOfferCompany
          validateDeleteOffer={validateDeleteOffer}
          cancelDeleteOffer={cancelDeleteOffer}
        />
      )}
    </div>
  );
}

export default CompanyOfferDetailsPage;