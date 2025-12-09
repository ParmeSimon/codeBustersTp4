import style from "../../../styles/student.module.css";
import { useState, useEffect } from "react";
import { studentService } from "../../../services/api.js";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

function PopupEditProfileStudent({ onClose }) {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) return <div className={style.loading}>Chargement...</div>;
  if (error) return <div className={style.error}>{error}</div>;

  return (
    <div className={style.popupOverlay} onClick={onClose}>
      <div className={style.popupCard} onClick={(e) => e.stopPropagation()}>
        <h2>Modifier le profil</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className={style.formGroup}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder={profile.name} />
          </div>
          {/* CV */}
          <div className={style.formGroup}>
            <label htmlFor="cv">CV</label>
            <input type="text" id="cv" placeholder={profile.cvLink}/>
          </div>
          {/* Github */}
          <div className={style.formGroup}>
            <label htmlFor="github">Github</label>
            <input type="text" id="github" placeholder={profile.githubLink}/>
          </div>
          {/* Portfolio */}
          <div className={style.formGroup}>
            <label htmlFor="portfolio">Portfolio</label>
            <input type="text" id="portfolio" placeholder={profile.portfolioLink}/>
          </div>
          {/* Skills */}
          {/* <div className={style.formGroup}>
            <label htmlFor="skills">Compétences</label>
            <textarea id="skills" value={(profile?.skills || []).join("\n")}/>
          </div> */}
          <div className={style.formGroup}>
            <label htmlFor="skills">Compétences</label>
            <input type="text" id="skills" placeholder="Veuillez rentrer une compétence" />
          </div>
          <div className={style.listSkills}>
            {profile.skills?.map((skill) => (
              <span key={skill} className={style.spanSkill}>{skill}<button><HugeiconsIcon icon={Cancel01Icon} size={16}/></button></span>
            ))}
          </div>
          {/* Buttons */}
          <div className={style.popupActions}>
            <button className={style.saveBtn}>Sauvegarder</button>
            <button type="button" className={style.cancelBtn} onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupEditProfileStudent;
