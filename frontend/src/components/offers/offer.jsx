import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, WorkIcon, Location06Icon } from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";

/**
 * Composant réutilisable pour afficher les détails d'une offre
 * @param {Object} offer - Les données de l'offre
 * @param {string} userType - Type d'utilisateur: 'student' ou 'company'
 * @param {Object} style - Module CSS à utiliser
 * @param {Function} onApply - Fonction appelée lors du clic sur "Postuler" (pour étudiant)
 * @param {Function} onModify - Fonction appelée lors du clic sur "Modifier" (pour entreprise)
 * @param {Function} onDelete - Fonction appelée lors du clic sur "Supprimer" (pour entreprise)
 * @param {string} backUrl - URL de retour pour le bouton retour
 */
export const Offer = ({
    offer,
    userType = 'student',
    style,
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
        <div className={style.card}>
            <div className={style.header}>
                <HugeiconsIcon
                    icon={ArrowLeft01Icon}
                    onClick={handleBack}
                    style={{ cursor: 'pointer' }}
                />
                <h3>{offer.title}</h3>
            </div>
            <div className={style.main}>
                <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" alt="Offre" />
                <div className={style.detail}>
                    <p>Le {new Date(offer.createdAt).toLocaleDateString()}</p>
                    <h4>{offer.title}</h4>
                    <div className={style.contract}>
                        <HugeiconsIcon icon={WorkIcon} color="#b497cd" />
                        <p>Type de contrat : {offer.contractType}</p>
                    </div>
                    <div className={style.localisation}>
                        <HugeiconsIcon icon={Location06Icon} color="#b497cd" />
                        <p>{offer.location}</p>
                    </div>
                </div>
            </div>
            <div className={style.cards}>
                <div className={style.description}>
                    <h4>Description de l'offre</h4>
                    <p>{offer.description}</p>
                </div>
                <div className={style.cardKeywords}>
                    <h4>Mots-clés</h4>
                    <div className={style.keywords}>
                        {(offer.keywords || []).map((keyword, index) => (
                            <p key={`${keyword}-${index}`}>{keyword}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Actions différentes selon le type d'utilisateur */}
            {userType === 'student' && (
                <button onClick={onApply}>Postuler</button>
            )}

            {userType === 'company' && (
                <div className={style.actions}>
                    <button
                        className={style.modifyBtn}
                        onClick={onModify}
                    >
                        Modifier l'offre
                    </button>
                    <button
                        className={style.deleteBtn}
                        onClick={onDelete}
                    >
                        Supprimer l'offre
                    </button>
                </div>
            )}
        </div>
    );
};