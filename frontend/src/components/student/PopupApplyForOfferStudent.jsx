import "../../styles/components/student/popup-apply-for-offer/style.css";
import { useState } from "react";

const PopupApplyForOfferStudent = ({ onClose, onSubmit }) => {
  const [coverLetter, setCoverLetter] = useState("Votre offre de stage correspond parfaitement à mon profil...");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(coverLetter);
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <h2 className="popup-title">Candidature</h2>

        <form className="popup-form" onSubmit={handleSubmit}>
          <textarea
            className="apply-textarea"
            placeholder="Votre offre de stage correspond parfaitement à mon profil..."
            aria-label="Message de candidature"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          />
          <button type="submit" className="send-btn">
            Envoyer
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupApplyForOfferStudent;