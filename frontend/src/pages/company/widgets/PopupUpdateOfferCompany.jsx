import style from "../../../styles/company.module.css";

function PopupUpdateOfferCompany({ onClose }) {
  return (
    <div className={style.popupOverlay} onClick={onClose}>
      <div className={style.popupCard} onClick={(e) => e.stopPropagation()}>
        <h2>Modifier une offre</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Title */}
          <div className={style.formGroup}>
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              placeholder="Saisissez le titre de l'offre"
            />
          </div>
          {/* Description */}
          <div className={style.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="localisation"
              placeholder="Saisissez la description de l'offre"
            />
          </div>
          {/* Contract */}
          <div className={style.formGroup}>
            <label htmlFor="contract">Contrat</label>
            <select contract="contract" id="contract">
              <option value="apprenticeship">Alternance</option>
              <option value="cdd">CDD</option>
              <option value="cdi">CDI</option>
            </select>
          </div>
          {/* Localisation */}
          <div className={style.formGroup}>
            <label htmlFor="localisation">Localisation</label>
            <input
              type="text"
              id="localisation"
              placeholder="Saisissez la localisation de l'offre"
            />
          </div>
          {/* Keyword */}
          <div className={style.formGroup}>
            <label htmlFor="keyword">Mot-clés</label>
            <textarea
              id="keyword"
              placeholder="Saisissez les mots-clés associés à l'offre"
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

export default PopupUpdateOfferCompany;
