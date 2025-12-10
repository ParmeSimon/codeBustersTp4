import style from "../../styles/company.module.css";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Delete02Icon } from "@hugeicons/core-free-icons";

function PopupUpdateOfferCompany({ onClose, offer, setOffer }) {
  const [updatedOffer, setUpdatedOffer] = useState({
    ...offer,
    keywords: offer?.keywords || []
  });

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
              value={updatedOffer.title}
              onChange={(e) => setUpdatedOffer({ ...updatedOffer, title: e.target.value })}
            />
          </div>
          {/* Description */}
          <div className={style.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Saisissez la description de l'offre"
              value={updatedOffer.description}
              onChange={(e) => setUpdatedOffer({ ...updatedOffer, description: e.target.value })}
            />
          </div>
          {/* Contract */}
          <div className={style.formGroup}>
            <label htmlFor="contract">Contrat</label>
            <select
              id="contract"
              value={updatedOffer.contractType}
              onChange={(e) => setUpdatedOffer({ ...updatedOffer, contractType: e.target.value })}
            >
              <option value="ALTERNANCE">Alternance</option>
              <option value="CDD">CDD</option>
              <option value="CDI">CDI</option>
              <option value="STAGE">Stage</option>
            </select>
          </div>
          {/* Localisation */}
          <div className={style.formGroup}>
            <label htmlFor="localisation">Localisation</label>
            <input
              type="text"
              id="localisation"
              placeholder="Saisissez la localisation de l'offre"
              value={updatedOffer.location}
              onChange={(e) => setUpdatedOffer({ ...updatedOffer, location: e.target.value })}
            />
          </div>
          {/* Keywords */}
          <div className={style.formGroup}>
            <label>Mot-clés</label>
            {updatedOffer.keywords.map((keyword, index) => (
              <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <input
                  type="text"
                  placeholder={`Mot-clé ${index + 1}`}
                  value={keyword}
                  onChange={(e) => {
                    const newKeywords = [...updatedOffer.keywords];
                    newKeywords[index] = e.target.value;
                    setUpdatedOffer({ ...updatedOffer, keywords: newKeywords });
                  }}
                  style={{ flex: 1 }}
                />
                <button
                  type="button"
                  onClick={() => {
                    const newKeywords = updatedOffer.keywords.filter((_, i) => i !== index);
                    setUpdatedOffer({ ...updatedOffer, keywords: newKeywords });
                  }}
                  style={{ padding: '8px', background: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  <HugeiconsIcon icon={Delete02Icon} size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setUpdatedOffer({ ...updatedOffer, keywords: [...updatedOffer.keywords, ""] })}
              style={{ padding: '8px 16px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '8px' }}
            >
              <HugeiconsIcon icon={Add01Icon} size={16} /> Ajouter un mot-clé
            </button>
          </div>
          {/* Buttons */}
          <div className={style.popupActions}>
            <button
              type="button"
              className={style.saveBtn}
              onClick={() => {
                const offerToSave = {
                  ...updatedOffer,
                  keywords: updatedOffer.keywords.filter(k => k.trim() !== '')
                };
                setOffer(offerToSave);
                onClose();
              }}
            >
              Sauvegarder
            </button>
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
