import "../../styles/components/company/PopupDeleteOfferCompany.css";

const PopupDeleteOfferCompany = ({validateDeleteOffer, cancelDeleteOffer }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <h2>Supprimer l'offre</h2>
        <p>Êtes-vous sûrs de vouloir supprimer l'offre ?</p>
        <div className="popup-actions">
          <button className="save-btn" onClick={validateDeleteOffer}>
            Confirmer
          </button>
          <button className="cancel-btn" onClick={cancelDeleteOffer}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupDeleteOfferCompany;