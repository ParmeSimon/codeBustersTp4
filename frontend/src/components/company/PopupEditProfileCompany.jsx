import style from "../../styles/company.module.css";
import { useState } from "react";

function PopupEditProfileCompany({ onClose, profile, handleSaveUpdateProfile }) {
  const [formData, setFormData] = useState({
    name: profile?.name,
    location: profile?.location,
    website: profile?.website,
    description: profile?.description,
  });

  console.log(formData);

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
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          {/* Localisation */}
          <div className={style.formGroup}>
            <label htmlFor="localisation">Localisation</label>
            <input
              type="text"
              id="localisation"
              placeholder="Saisissez la localisation de l'entreprise"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          {/* Site Web */}
          <div className={style.formGroup}>
            <label htmlFor="site">Site Web</label>
            <input
              type="text"
              id="site"
              placeholder="Saisissez le site web de l'entreprise"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>
          {/* Description */}
          <div className={style.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Saisissez la description de l'entreprise"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          {/* Buttons */}
          <div className={style.popupActions}>
            <button className={style.saveBtn} onClick={() => handleSaveUpdateProfile(formData)}>Sauvegarder</button>
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
