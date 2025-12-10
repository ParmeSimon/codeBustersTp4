import "../../styles/components/offers/tag.css";

// Mapping des statuts vers leurs couleurs et labels français
const STATUS_CONFIG = {
    RECEIVED: {
        label: "Reçue",
        color: "#6c757d", // Gris
        bgColor: "#f8f9fa"
    },
    IN_REVIEW: {
        label: "En cours d'examen",
        color: "#0d6efd", // Bleu
        bgColor: "#cfe2ff"
    },
    INTERVIEW: {
        label: "Entretien",
        color: "#b497cd", // Violet
        bgColor: "#e8dff5"
    },
    REJECTED: {
        label: "Refusée",
        color: "#dc3545", // Rouge
        bgColor: "#f8d7da"
    },
    ACCEPTED: {
        label: "Acceptée",
        color: "#198754", // Vert
        bgColor: "#d1e7dd"
    }
};

export const Tag = ({ status }) => {
    const config = STATUS_CONFIG[status] || STATUS_CONFIG.RECEIVED;

    return (
        <span
            className="status-tag"
            style={{
                color: config.color,
                backgroundColor: config.bgColor,
                borderColor: config.color
            }}
        >
            {config.label}
        </span>
    );
};