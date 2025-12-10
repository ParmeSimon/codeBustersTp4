import '../../../styles/pages/student/profile/style.css';
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    UserIcon,
    DocumentValidationIcon,
    GithubIcon,
    BrowserIcon,
    Settings02Icon,
} from "@hugeicons/core-free-icons";
import PopupEditProfileStudent from "../../../components/student/PopupEditProfileStudent.jsx";
import HeaderStudent from "../../../components/student/HeaderStudent.jsx";
import useStudentProfile from '../../../hooks/useStudentProfile.jsx';
import { useAuth } from "../../../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";

function StudentProfilePage() {
    const { profile, loading, error, updateProfile } = useStudentProfile();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;
    if (!profile) return null;

    const handleSaveProfile = async (payload) => {
        await updateProfile(payload);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="student-profile">
            <HeaderStudent />

            {/* Profil */}
            <section className="profile-card">
                <button className='edit-profile-btn' type="button" onClick={() => setShowPopup(true)}>
                    <HugeiconsIcon icon={Settings02Icon} />
                </button>

                <div className="user-icon">
                    <HugeiconsIcon icon={UserIcon} size={36} />
                </div>

                <h2>{profile.name}</h2>
                <p>{profile.email}</p>
            </section>

            {/* Liens CV / Github / Portfolio */}
            <section className="profile-links">
                <a href={profile.cvLink} target="_blank" className="profile-link">
                    <HugeiconsIcon icon={DocumentValidationIcon} color="#b497cd" />
                    CV
                </a>
                <a href={profile.githubLink} target="_blank" className="profile-link">
                    <HugeiconsIcon icon={GithubIcon} color="#b497cd" />
                    Github
                </a>
                <a href={profile.portfolioLink} target="_blank" className="profile-link">
                    <HugeiconsIcon icon={BrowserIcon} color="#b497cd" />
                    Portfolio
                </a>
            </section>

            {/* Compétences */}
            <section className="profile-skills">
                <h3 className="skills-title">Mes compétences</h3>

                <div className="skills-list">
                    {profile.skills?.map((skill) => (
                        <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </section>

            {/* Deconnection */}
            <button onClick={handleLogout} className="disconnect-btn">Déconnexion</button>

            {/* Popup pour modifier le profil */}
            {showPopup && (
                <PopupEditProfileStudent profile={profile} onSave={handleSaveProfile} onClose={() => setShowPopup(false)} />
            )}
        </div>
    );
}

export default StudentProfilePage;