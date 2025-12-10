import style from "../../styles/company.module.css";

function PopupEditProfileCompany({ onClose }) {
  return (
    <div className={style.popupOverlay} onClick={onClose}>
      <div className={style.popupCard} onClick={(e) => e.stopPropagation()}>
        <h2>Modifier le profil</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className={style.formGroup}>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              placeholder="Saisissez le nom de l'entreprise"
            />
          </div>
          {/* Localisation */}
          <div className={style.formGroup}>
            <label htmlFor="localisation">Localisation</label>
            <input
              type="text"
              id="localisation"
              placeholder="Saisissez la localisation de l'entreprise"
            />
          </div>
          {/* Site Web */}
          <div className={style.formGroup}>
            <label htmlFor="site">Site Web</label>
            <input
              type="text"
              id="site"
              placeholder="Saisissez le site web de l'entreprise"
            />
          </div>
          {/* Description */}
          <div className={style.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Saisissez la description de l'entreprise"
            />
          </div>
          {/* Buttons */}
          <div className={style.popupActions}>
            <button className={style.saveBtn}>Sauvegarder</button>
            <button type="button" className={style.cancelBtn} onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupEditProfileCompany;
