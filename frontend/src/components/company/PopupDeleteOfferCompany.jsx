import style from "../../styles/company.module.css";

const PopupDeleteOfferCompany = ({ onClose }) => {
  return (
    <div className={style.popupOverlay}>
      <div className={style.popupCard}>
        <h2>Supprimer l'offre</h2>
        <p>Êtes-vous sûrs de vouloir supprimer l'offre ?</p>
        <div className={style.popupActions}>
          <button className={style.saveBtn} onClick={onClose}>
            Confirmer
          </button>
          <button className={style.cancelBtn} onClick={onClose}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupDeleteOfferCompany;