import "../../styles/components/company/PopupUpdateOfferCompany.css";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon, Delete02Icon } from "@hugeicons/core-free-icons";

function PopupUpdateOfferCompany({ onClose, offer, setOffer }) {
  const [updatedOffer, setUpdatedOffer] = useState({
    ...offer,
    keywords: offer?.keywords || []
  });

  const [keywordInput, setKeywordInput] = useState("");

  const handleAddKeyword = (e) => {
    e.preventDefault();
    const value = keywordInput.trim();
    if (!value) return;
    if (updatedOffer.keywords.includes(value)) return; // évite les doublons

    setUpdatedOffer({
      ...updatedOffer,
      keywords: [...updatedOffer.keywords, value],
    });
    setKeywordInput("");
  };

  const handleRemoveKeyword = (keywordToRemove) => {
    setUpdatedOffer({
      ...updatedOffer,
      keywords: updatedOffer.keywords.filter((k) => k !== keywordToRemove),
    });
  };

  const handleSave = () => {
    const offerToSave = {
      ...updatedOffer,
      keywords: updatedOffer.keywords.filter((k) => k.trim() !== ""),
    };
    setOffer(offerToSave);
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <h2>Modifier une offre</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Title */}
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Saisissez la description de l'offre"
              value={updatedOffer.description}
              onChange={(e) => setUpdatedOffer({ ...updatedOffer, description: e.target.value })}
            />
          </div>
          {/* Contract */}
          <div className="form-group">
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
          <div className="form-group">
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
            {updatedOffer.keywords.map((keyword) => (
              <span key={keyword} className="keyword-chip">
                {keyword}
                <button
                  type="button"
                  onClick={() => handleRemoveKeyword(keyword)}
                >
                  <HugeiconsIcon icon={Delete02Icon} size={16} />
                </button>
              </span>
            ))}
          </div>
          {/* Buttons */}
          <div className="popup-actions">
            <button
              type="button"
              className="save-btn"
              onClick={handleSave}
            >
              Sauvegarder
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupUpdateOfferCompany;
