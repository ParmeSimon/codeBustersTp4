import "../../styles/components/offers/style.css";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { Tag } from "./tag";
import { HugeiconsIcon } from "@hugeicons/react";
import { Delete02Icon } from "@hugeicons/core-free-icons";

export default function ShowOffers({ offers, loading, isStudent, isCompany, applications = [], onDeleteApplication }) {
    const navigate = useNavigate();

    // Fonction pour vérifier si l'étudiant a déjà postulé à une offre
    const hasApplied = (offerId) => {
        const applied = applications.some(app => app.offerId === offerId);
        return applied;
    };

    // Fonction pour obtenir l'ID de la candidature
    const getApplicationId = (offerId) => {
        const application = applications.find(app => app.offerId === offerId);
        return application?.id;
    };

    // Fonction pour obtenir le statut de la candidature
    const getApplicationStatus = (offerId) => {
        const application = applications.find(app => app.offerId === offerId);
        return application?.status;
    };

    return (
        <div className="offersContainer">
            {loading ? (
                <LoadingSpinner />
            ) : offers.length > 0 ? (
                <div className="offers">
                    {offers.map((offer) => {
                        const alreadyApplied = isStudent && hasApplied(offer.id);

                        return (
                            <div key={offer.id} className="offer">
                                {/* Tag de statut en haut à droite si déjà postulé */}
                                {alreadyApplied && (
                                    <div className="offer-status-tag">
                                        <Tag status={getApplicationStatus(offer.id)} />
                                    </div>
                                )}
                                <img src={offer.imageUrl || "https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg"} alt={offer.title} />
                                <div className="detail">
                                    <h2>{offer.title} - {offer.location}</h2>
                                    <p>{offer.description}</p>
                                    {isStudent && (
                                        <>
                                            {alreadyApplied ? (
                                                <div className="buttonGroup">
                                                    <button
                                                        className="viewOfferButton applied"
                                                        onClick={() => navigate(`/etudiant/offres/${offer.id}`)}
                                                        disabled={true}
                                                    >
                                                        ✓ Déjà postulé
                                                    </button>
                                                    <button
                                                        className="deleteApplicationButton"
                                                        onClick={() => onDeleteApplication(getApplicationId(offer.id))}
                                                        title="Supprimer la candidature"
                                                    >
                                                        <HugeiconsIcon icon={Delete02Icon} size={20} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    className="viewOfferButton"
                                                    onClick={() => navigate(`/etudiant/offres/${offer.id}`)}
                                                >
                                                    Voir l'offre
                                                </button>
                                            )}
                                        </>
                                    )}
                                    {isCompany && (
                                        <>
                                            <button className="viewOfferButton" onClick={() => navigate(`/entreprise/offres/${offer.id}`)}>
                                                Voir l'offre
                                            </button>
                                            <button className="viewOfferButton" onClick={() => navigate(`/entreprise/offres/candidatures/${offer.id}`)}>
                                                Voir candidatures ({offer._count?.applications || 0})
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>Aucune offre disponible pour le moment.</p>
            )}
        </div>
    );
}