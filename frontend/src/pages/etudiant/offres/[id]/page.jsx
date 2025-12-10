import style from '../../../../styles/student.module.css';
import HeaderStudent from '../../../../components/student/HeaderStudent';

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, WorkIcon, Location06Icon } from "@hugeicons/core-free-icons";
import { useOffers } from '../../../../hooks/useoffers';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function page() {
    const { getOfferDetail, offerDetail } = useOffers()
    const { id } = useParams();

    // Charger les détails de l'offre au montage
    useEffect(() => {
        getOfferDetail(id);
    }, [id]);

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
                <button>Postuler</button>
            </div>

        </div>
    );
}

export default page;