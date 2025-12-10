import { useState } from "react";
import HeaderCompany from "../../../components/company/HeaderCompany";
import '../../../styles/pages/company/offers/style.css';
import "swiper/css";
import "swiper/css/navigation";

import { HugeiconsIcon } from "@hugeicons/react";
import { PropertyAddIcon } from "@hugeicons/core-free-icons";
import PopupAddOffersCompany from "../../../components/company/PopupAddOffersCompany";
import ShowOffers from "../../../components/offers/showOffers";
import { useAuth } from "../../../hooks/useAuth";
import { useOffers } from "../../../hooks/useoffers";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

function CompanyOffersPage() {
  const [showPopup, setShowPopup] = useState(false);
  const { isStudent, isCompany } = useAuth();
  const { getAllOffers, offers, loading, createOffer } = useOffers();
  const { enqueueSnackbar } = useSnackbar();
  const [newOffer, setNewOffer] = useState(
    {
      title: "",
      description: "",
      contractType: "ALTERNANCE",
      location: "",
      keywords: [""]
    });
  useEffect(() => {
    getAllOffers();
  }, []);

  const handleSaveOffer = async (offer) => {
    const response = await createOffer(offer);
    if (response.success) {
      enqueueSnackbar("Offre créée avec succès", { variant: "success" });
      getAllOffers();
      setShowPopup(false);
      setNewOffer({
        title: "",
        description: "",
        contractType: "ALTERNANCE",
        location: "",
        keywords: [""]
      });
    } else {
      const errorMessage = response.details?.[0]?.message || response.error || "Erreur lors de la création de l'offre";
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  };

  const handlecancel = () => {
    setShowPopup(false);
    setNewOffer({
      title: "",
      description: "",
      contractType: "",
      location: "",
      keywords: [""]
    });
  };

  return (
    <div className="company-offer">
      <HeaderCompany />

      {/* Add Button */}
      <button type="button" className="add-offer-btn" onClick={() => setShowPopup(true)}>
        <HugeiconsIcon icon={PropertyAddIcon} />
      </button>
      
      {/* Offers */}
      <ShowOffers offers={offers} loading={loading} isStudent={isStudent} isCompany={isCompany} />

      {/* Popup pour ajouter une offre */}
      {showPopup && (
        <PopupAddOffersCompany
          onClose={handlecancel}
          newOffer={newOffer}
          setNewOffer={setNewOffer}
          onSave={handleSaveOffer}
        />
      )}
    </div>
  );
}

export default CompanyOffersPage;
