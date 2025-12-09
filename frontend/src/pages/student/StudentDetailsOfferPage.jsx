import { useState, useEffect } from 'react';
import style from '../../styles/student.module.css';
import HeaderStudent from './widgets/HeaderStudent';

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, WorkIcon, Location06Icon } from "@hugeicons/core-free-icons";
import PopupApplication from './widgets/PopupApplication';

function StudentDetailsOfferPage() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (showPopup) {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow || 'auto';
        };
        }
    }, [showPopup]);
        
    return (
        <div className={style.studentDetailsOffer}>
            <HeaderStudent />
            <div className={style.card}>
                <div className={style.header}>
                    <HugeiconsIcon icon={ArrowLeft01Icon} />
                    <h3>Stagiaire Développeur Front-End</h3>
                </div>
                <div className={style.main}>
                    <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
                    <div className={style.detail}>
                        <p>Le 10/10/2025</p>
                    <h4>Stagiaire Développeur Front-End</h4>
                    <div className={style.contract}>
                        <HugeiconsIcon icon={WorkIcon} />
                        <p>Type de contrat : Stage</p>
                    </div>
                    <div className={style.localisation}>
                        <HugeiconsIcon icon={Location06Icon} />
                        <p>Paris</p>
                    </div>
                    </div>
                </div>
                <div className={style.cards}>
                    <div className={style.description}>
                        <h4>Description de l'offre</h4>
                        <p>Stage de 6 mois pour développer des interfaces utilisateur modernes avec React et TypeScript.</p>
                    </div>
                    <div className={style.cardKeywords}>
                        <h4>Mots-clés</h4>
                        <div className={style.keywords}>
                            <p>CDI</p>
                            <p>Python</p>
                            <p>React</p>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={() => setShowPopup(true)}>Postuler</button>
            </div>

            {/* Popup pour modifier le profil */}
            {showPopup && (
                <PopupApplication onClose={() => setShowPopup(false)} />
            )}
        </div>


    );
}

export default StudentDetailsOfferPage;