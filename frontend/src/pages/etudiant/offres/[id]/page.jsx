import "../../../../styles/pages/student/offer-details/style.css";
import HeaderStudent from '../../../../components/student/HeaderStudent';
import { Offer } from '../../../../components/offers/offer';
import { useOffers } from '../../../../hooks/useoffers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PopupApplyForOfferStudent from '../../../../components/student/PopupApplyForOfferStudent';
import useStudentProfile from '../../../../hooks/useStudentProfile';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
function StudentOfferDetailsPage() {
    const navigate = useNavigate();
    const { getOfferDetail } = useOffers();
    const { applyToOffer } = useStudentProfile();
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams();
    const [showApplyPopup, setShowApplyPopup] = useState(false);
    const [offer, setOffer] = useState(null);
    const [loading, setLoading] = useState(true);

    // Charger les détails de l'offre au montage
    useEffect(() => {
        const loadOffer = async () => {
            setLoading(true);
            const data = await getOfferDetail(id);
            setOffer(data);
            setLoading(false);
        };
        loadOffer();
    }, [id]);

    const handleApply = () => {
        setShowApplyPopup(true);
    };

    const handleSubmitApplication = async (coverLetter) => {
        try {
            await applyToOffer(id, coverLetter);
            enqueueSnackbar("Candidature envoyée avec succès", { variant: "success" });
            setShowApplyPopup(false);
            navigate("/etudiant/offres");
        } catch (error) {
            enqueueSnackbar(error.message || "Erreur lors de l'envoi de la candidature", { variant: "error" });
        }
    };

    // Afficher un loader si les données ne sont pas encore chargées
    if (loading || !offer) {
        return (
            <div className="studentDetailsOffer">
                <HeaderStudent />
                <p>Chargement...</p>
            </div>
        );
    }
    return (
        <div className="studentDetailsOffer">
            <HeaderStudent />
            <Offer
                offer={offer}
                userType="student"
                onApply={handleApply}
                backUrl="/etudiant/offres"
            />

            {/* Popup pour postuler */}
            {showApplyPopup && (
                <PopupApplyForOfferStudent
                    onClose={() => setShowApplyPopup(false)}
                    onSubmit={handleSubmitApplication}
                />
            )}
        </div>
    );
}

export default StudentOfferDetailsPage;