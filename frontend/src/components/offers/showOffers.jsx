import "../../styles/components/offers/style.css";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router-dom";

export default function ShowOffers({ offers, loading, isStudent, isCompany }) {
    const navigate = useNavigate();
    return (
        <div className="offersContainer">
            {loading ? (
                <LoadingSpinner />
            ) : offers.length > 0 ? (
                <div className="offers">
                    {offers.map((offer) => (
                        <div key={offer.id} className="offer">
                            <img src={offer.imageUrl || "https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg"} alt={offer.title} />
                            <div className="detail">
                                <h2>{offer.title} - {offer.location}</h2>
                                <p>{offer.description}</p>
                                <button className="viewOfferButton" onClick={() => navigate(`/entreprise/offres/${offer.id}`)}>Voir l'offre</button>
                                {isCompany && (
                                    <button className="viewOfferButton" onClick={() => navigate(`/entreprise/offres/${offer.id}`)}>Voir candidatures</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Aucune offre disponible pour le moment.</p>
            )}
        </div>
    );
}