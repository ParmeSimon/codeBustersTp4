import "../../styles/components/offers/popup-delete.css";

export const PopupDelete = ({ onConfirm, onCancel, title, message }) => {
    return (
        <div className="popup-delete-overlay" onClick={onCancel}>
            <div className="popup-delete-card" onClick={(e) => e.stopPropagation()}>
                <h2 className="popup-delete-title">{title || "Confirmation"}</h2>
                <p className="popup-delete-message">
                    {message || "Êtes-vous sûr de vouloir supprimer cette candidature ?"}
                </p>
                <div className="popup-delete-actions">
                    <button
                        className="popup-delete-confirm"
                        onClick={onConfirm}
                    >
                        Supprimer
                    </button>
                    <button
                        className="popup-delete-cancel"
                        onClick={onCancel}
                    >
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    );
};