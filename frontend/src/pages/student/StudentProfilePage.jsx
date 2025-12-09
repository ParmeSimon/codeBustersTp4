import style from "../../styles/student.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { studentService } from "../../services/api.js";
import {
  UserIcon,
  DocumentValidationIcon,
  GithubIcon,
  BrowserIcon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";
import PopupEditProfileStudent from "./widgets/PopupEditProfileStudent";
import HeaderStudent from "./widgets/HeaderStudent";

function StudentProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (showPopup) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow || 'auto';
      };
    }
  }, [showPopup]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await studentService.getProfile();
        setProfile(data);
      } catch (err) {
        setError(err.message || "Impossible de charger le profil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!profile) return <p>Aucun profil trouvé.</p>;
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <div className={style.studentProfile}>
      <HeaderStudent />
      {/* Profil */}
      <section className={style.profileCard}>
        <button type="button" onClick={() => setShowPopup(true)}>
          <HugeiconsIcon icon={Settings02Icon} />
        </button>

        <div className={style.icon}>
          <HugeiconsIcon icon={UserIcon} size={36} />
        </div>

        <h2 className={style.profileName}>{profile.name}</h2>
        <p className={style.profileEmail}>{profile.email}</p>
      </section>

      {/* Liens CV / Github / Portfolio */}
      <section className={style.profileLinks}>
        <a href={profile.cvLink} target="_blank" className={style.profileLink}>
          <HugeiconsIcon icon={DocumentValidationIcon} color="#b497cd" />
          CV
        </a>
        <a href={profile.githubLink} target="_blank" className={style.profileLink}>
          <HugeiconsIcon icon={GithubIcon} color="#b497cd" />
          Github
        </a>
        <a href={profile.portfolioLink} target="_blank" className={style.profileLink}>
          <HugeiconsIcon icon={BrowserIcon} color="#b497cd" />
          Portfolio
        </a>
      </section>

      {/* Compétences */}
      <section className={style.skillsCard}>
        <h3 className={style.skillsTitle}>Mes compétences</h3>

        <div className={style.skillsList}>
          {profile.skills?.map((skill) => (
            <span key={skill} className={style.skillTag}>{skill}</span>
          ))}
        </div>
      </section>
      <button onClick={handleLogout} className={style.disconnectButton}>Déconnexion</button>

      {/* Popup pour modifier le profil */}
      {showPopup && (
        <PopupEditProfileStudent onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}

export default StudentProfilePage;
