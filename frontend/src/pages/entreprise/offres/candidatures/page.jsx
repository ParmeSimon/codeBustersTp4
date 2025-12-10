import style from "../../../../styles/company.module.css";
import HeaderCompany from "../../../../components/company/HeaderCompany";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  UserIcon,
  DocumentValidationIcon,
  GithubIcon,
  BrowserIcon,
} from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOffers } from "../../../../hooks/useoffers";
import useCompanyProfile from "../../../../hooks/useCompany";
import { useSnackbar } from "notistack";

const STATUS_LABELS = {
  RECEIVED: "Reçu",
  IN_REVIEW: "En cours d'examen",
  INTERVIEW: "Entretien",
  REJECTED: "Refusé",
  ACCEPTED: "Accepté"
};

export default function CompanyOfferApplicationsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOfferDetail } = useOffers();
  const { getApplications, updateApplicationStatus } = useCompanyProfile();
  const { enqueueSnackbar } = useSnackbar();

  const [offer, setOffer] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      // Charger l'offre
      const offerData = await getOfferDetail(id);
      setOffer(offerData);

      // Charger toutes les candidatures et filtrer par offre
      const allApplications = await getApplications();
      const offerApplications = allApplications.filter(app => app.offerId === id);
      setApplications(offerApplications);
      setLoading(false);
    };
    loadData();
  }, [id]);
  const handleStatusChange = async (applicationId, newStatus) => {
    const result = await updateApplicationStatus(applicationId, newStatus);
    if (result.success) {
      enqueueSnackbar("Statut mis à jour avec succès", { variant: "success" });
      // Mettre à jour localement
      setApplications(applications.map(app =>
        app.id === applicationId ? { ...app, status: newStatus } : app
      ));
    } else {
      enqueueSnackbar(result.error || "Erreur lors de la mise à jour", { variant: "error" });
    }
  };

  if (loading) {
    return (
      <div className={style.candidaturesPage}>
        <HeaderCompany />
        <p>Chargement...</p>
      </div>
    );
  }

  if (!offer) {
    return (
      <div className={style.candidaturesPage}>
        <HeaderCompany />
        <p>Offre non trouvée</p>
      </div>
    );
  }

  return (
    <div className={style.candidaturesPage}>
      <HeaderCompany />

      {/* Offer Header Card */}
      <div className={style.card}>
        <div className={style.header}>
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            onClick={() => navigate('/entreprise/offres')}
            style={{ cursor: 'pointer' }}
          />
          <h3>Candidatures - {applications.length}</h3>
        </div>
        <div className={style.main}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" alt={offer.title} />
          <p className={style.timeInfo}>
            {new Date(offer.createdAt).toLocaleDateString()}
          </p>

          <h2 className={style.offerTitle}>{offer.title}</h2>
          <p className={style.offerDescription}>{offer.description}</p>

          <button
            className={style.seeOfferBtn}
            onClick={() => navigate(`/entreprise/offres/${id}`)}
          >
            Voir l'offre
          </button>
        </div>
      </div>

      {/* Candidates Grid */}
      {applications.length > 0 ? (
        <div className={style.candidatesGrid}>
          {applications.map((application) => (
            <div className={style.candidateCard} key={application.id}>
              {/* Profile Header */}
              <div className={style.candidateHeader}>
                <div className={style.iconWrapper}>
                  <HugeiconsIcon icon={UserIcon} size={20} />
                </div>
                <h4 className={style.candidateName}>
                  {application.student?.name} 
                </h4>
              </div>

              {/* Status Buttons */}
              <div className={style.statusRow}>
                {Object.entries(STATUS_LABELS).map(([status, label]) => (
                  <button
                    key={status}
                    className={`${style.statusBtn} ${application.status === status ? style.statusActive : ''}`}
                    onClick={() => handleStatusChange(application.id, status)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Links */}
              <div className={style.linksRow}>
                {application.student?.cvUrl && (
                  <a
                    href={application.student.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.linkBtn}
                  >
                    <HugeiconsIcon icon={DocumentValidationIcon} size={24} />
                    CV
                  </a>
                )}
                {application.student?.githubUrl && (
                  <a
                    href={application.student.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.linkBtn}
                  >
                    <HugeiconsIcon icon={GithubIcon} size={24} />
                    Github
                  </a>
                )}
                {application.student?.portfolioUrl && (
                  <a
                    href={application.student.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.linkBtn}
                  >
                    <HugeiconsIcon icon={BrowserIcon} size={24} />
                    Portfolio
                  </a>
                )}
              </div>

              {/* Skills Tags */}
              {application.student?.skills && application.student.skills.length > 0 && (
                <div className={style.skillsTagsRow}>
                  {application.student.skills.map((skill, idx) => (
                    <span key={idx} className={style.skillTag}>{skill}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '40px' }}>
          Aucune candidature pour cette offre
        </p>
      )}
    </div>
  );
}
