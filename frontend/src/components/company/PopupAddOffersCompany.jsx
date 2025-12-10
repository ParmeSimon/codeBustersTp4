import style from "../../styles/company.module.css";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Delete02Icon } from "@hugeicons/core-free-icons";

function PopupAddOffersCompany({ onClose, newOffer, setNewOffer, onSave }) {
  const handleKeywordChange = (index, value) => {
    const updatedKeywords = [...newOffer.keywords];
    updatedKeywords[index] = value;
    setNewOffer({ ...newOffer, keywords: updatedKeywords });
  };

  const addKeywordField = () => {
    setNewOffer({ ...newOffer, keywords: [...newOffer.keywords, ""] });
  };

  const removeKeywordField = (index) => {
    const updatedKeywords = newOffer.keywords.filter((_, i) => i !== index);
    setNewOffer({ ...newOffer, keywords: updatedKeywords });
  };

  const handleSave = () => {
    // Filtrer les mots-clés vides avant de sauvegarder
    const offerToSave = {
      ...newOffer,
      keywords: newOffer.keywords.filter(k => k.trim() !== '')
    };

    if (onSave) {
      onSave(offerToSave);
    }
  };

  return (
    <div className={style.popupOverlay} onClick={onClose}>
      <div className={style.popupCard} onClick={(e) => e.stopPropagation()}>
        <h2>Ajouter une offre</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Title */}
          <div className={style.formGroup}>
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              id="title"
              placeholder="Saisissez le titre de l'offre"
              value={newOffer.title}
              onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
            />
          </div>
          {/* Description */}
          <div className={style.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="localisation"
              placeholder="Saisissez la description de l'offre"
              value={newOffer.description}
              onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
            />
          </div>
          {/* Contract */}
          <div className={style.formGroup}>
            <label htmlFor="contract">Contrat</label>
            <select contract="contract" id="contract" value={newOffer.contractType} onChange={(e) => setNewOffer({ ...newOffer, contractType: e.target.value })}>
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
              value={newOffer.location}
              onChange={(e) => setNewOffer({ ...newOffer, location: e.target.value })}
            />
          </div>
          {/* Keywords */}
          <div className={style.formGroup}>
            <label>Mot-clés</label>
            {newOffer.keywords.map((keyword, index) => (
              <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <input
                  type="text"
                  placeholder={`Mot-clé ${index + 1}`}
                  value={keyword}
                  onChange={(e) => handleKeywordChange(index, e.target.value)}
                  style={{ flex: 1 }}
                />
                <button
                  type="button"
                  onClick={() => removeKeywordField(index)}
                  style={{ padding: '8px', background: '#ff4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  <HugeiconsIcon icon={Delete02Icon} size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addKeywordField}
              style={{ padding: '8px 16px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '8px' }}
            >
              <HugeiconsIcon icon={Add01Icon} size={16} /> Ajouter un mot-clé
            </button>
          </div>
          {/* Buttons */}
          <div className={style.popupActions}>
            <button type="button" className={style.saveBtn} onClick={handleSave}>Sauvegarder</button>
            <button type="button" className={style.cancelBtn} onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupAddOffersCompany;
