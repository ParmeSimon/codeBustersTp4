import style from "../../../styles/student.module.css";

function PopupEditProfileStudent({ onClose }) {
  return (
    <div className={style.popupOverlay} onClick={onClose}>
      <div className={style.popupCard} onClick={(e) => e.stopPropagation()}>
        <h2>Modifier le profil</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className={style.formGroup}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" />
          </div>
          {/* CV */}
          <div className={style.formGroup}>
            <label htmlFor="cv">CV</label>
            <input type="text" id="cv" />
          </div>
          {/* Github */}
          <div className={style.formGroup}>
            <label htmlFor="github">Github</label>
            <input type="text" id="github" />
          </div>
          {/* Portfolio */}
          <div className={style.formGroup}>
            <label htmlFor="portfolio">Portfolio</label>
            <input type="text" id="portfolio" />
          </div>
          {/* Skills */}
          <div className={style.formGroup}>
            <label htmlFor="skills">Compétences</label>
            <textarea id="skills" />
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

export default PopupEditProfileStudent;
