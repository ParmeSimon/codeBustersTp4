import "../../styles/components/company/PopupEditProfileCompany.css"

function PopupEditProfileCompany({ onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <h2>Modifier le profil</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              placeholder="Saisissez le nom de l'entreprise"
            />
          </div>
          {/* Localisation */}
          <div className="form-group">
            <label htmlFor="localisation">Localisation</label>
            <input
              type="text"
              id="localisation"
              placeholder="Saisissez la localisation de l'entreprise"
            />
          </div>
          {/* Site Web */}
          <div className="form-group">
            <label htmlFor="site">Site Web</label>
            <input
              type="text"
              id="site"
              placeholder="Saisissez le site web de l'entreprise"
            />
          </div>
          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Saisissez la description de l'entreprise"
            />
          </div>
          {/* Buttons */}
          <div className="popup-actions">
            <button className="save-btn">Sauvegarder</button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupEditProfileCompany;
