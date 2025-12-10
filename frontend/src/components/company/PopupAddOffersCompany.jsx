import "../../styles/components/company/PopupAddOffersCompany.css"
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";

function PopupAddOffersCompany({ onClose, newOffer, setNewOffer, onSave }) {
  const [keywordInput, setKeywordInput] = useState("");
  
  const handleAddKeyword = (e) => {
    e.preventDefault();
    const value = keywordInput.trim();
    if (!value) return;
    if (newOffer.keywords.includes(value)) return;

    setNewOffer({
      ...newOffer,
      keywords: [...newOffer.keywords, value],
    });
    setKeywordInput("");
  };

  const handleRemoveKeyword = (keywordToRemove) => {
    setNewOffer({
      ...newOffer,
      keywords: newOffer.keywords.filter((k) => k !== keywordToRemove),
    });
  };

  const handleSave = () => {
    const offerToSave = {
      ...newOffer,
      keywords: newOffer.keywords.filter(k => k.trim() !== '')
    };

    if (onSave) {
      onSave(offerToSave);
    }
  };

  return (
    <div className="popup-add-offer-overlay" onClick={onClose}>
      <div className="popup-add-offer-card" onClick={(e) => e.stopPropagation()}>
        <h2>Ajouter une offre</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Title */}
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="localisation"
              placeholder="Saisissez la description de l'offre"
              value={newOffer.description}
              onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
            />
          </div>
          {/* Contract */}
          <div className="form-group">
            <label htmlFor="contract">Contrat</label>
            <select contract="contract" id="contract" value={newOffer.contractType} onChange={(e) => setNewOffer({ ...newOffer, contractType: e.target.value })}>
              <option value="ALTERNANCE">Alternance</option>
              <option value="CDD">CDD</option>
              <option value="CDI">CDI</option>
              <option value="STAGE">Stage</option>

            </select>
          </div>
          {/* Localisation */}
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="keywords">Mots-clés</label>
            <input
              type="text"
              id="keywords"
              placeholder="Ajouter un mot-clé"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddKeyword(e)}
            />
          </div>

          <div className="list-keywords">
            {newOffer.keywords
              .filter(k => k.trim() !== "") 
              .map((keyword) => (
              <span key={keyword} className="keyword-chip">
                {keyword}
                <button
                  type="button"
                  onClick={() => handleRemoveKeyword(keyword)}
                >
                  <HugeiconsIcon icon={Cancel01Icon} size={16} />
                </button>
              </span>
            ))}
          </div>
          {/* Buttons */}
          <div className="popup-actions">
            <button type="button" className="save-btn" onClick={handleSave}>Sauvegarder</button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupAddOffersCompany;
