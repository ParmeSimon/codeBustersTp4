import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, WorkIcon, Location06Icon } from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
import "../../styles/components/offers/offer.css";

export const Offer = ({
    offer,
    userType = 'student',
    onApply,
    onModify,
    onDelete,
    backUrl
}) => {
    const navigate = useNavigate();
    const handleBack = () => {
        if (backUrl) {
            navigate(backUrl);
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="card-offer">
            <div className="header">
                <HugeiconsIcon
                    icon={ArrowLeft01Icon}
                    onClick={handleBack}
                    style={{ cursor: 'pointer' }}
                />
                <h3>{offer.title}</h3>
            </div>
            <div className="main">
                <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" alt="Offre" />
                <div className="detail">
                    <p>Le {new Date(offer.createdAt).toLocaleDateString()}</p>
                    <h4>{offer.title}</h4>
                    <div className="contract">
                        <HugeiconsIcon icon={WorkIcon} color="#b497cd" />
                        <p>Type de contrat : {offer.contractType}</p>
                    </div>
                    <div className="localisation">
                        <HugeiconsIcon icon={Location06Icon} color="#b497cd" />
                        <p>{offer.location}</p>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="description">
                    <h4>Description de l'offre</h4>
                    <p>{offer.description}</p>
                </div>
                <div className="cardKeywords">
                    <h4>Mots-clés</h4>
                    <div className="keywords">
                        {(offer.keywords || []).map((keyword, index) => (
                            <p key={`${keyword}-${index}`}>{keyword}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Actions différentes selon le type d'utilisateur */}
            {userType === 'student' && (
                <button className="application" onClick={onApply}>Postuler</button>
            )}

            {userType === 'company' && (
                <div className="actions">
                    <button
                        className="modifyBtn"
                        onClick={onModify}
                    >
                        Modifier l'offre
                    </button>
                    <button
                        className="deleteBtn"
                        onClick={onDelete}
                    >
                        Supprimer l'offre
                    </button>
                </div>
            )}
        </div>
    );
};