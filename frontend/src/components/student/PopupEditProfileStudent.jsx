import "../../styles/components/student/popupEditProfileStudent.css";
import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

function PopupEditProfileStudent({ profile, onSave, onClose }) {

  const [profileData, setProfileData] = useState({
    name: "",
    cvLink: "",
    githubLink: "",
    portfolioLink: "",
    skills: [],
  })

  useEffect(() => {
    setProfileData({
      name: profile?.name ?? "",
      cvLink: profile?.cvLink ?? "",
      githubLink: profile?.githubLink ?? "",
      portfolioLink: profile?.portfolioLink ?? "",
      skills: profile?.skills ?? [],
    });
  }, [profile]);

  const handleFieldChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const value = profileData._skillInput?.trim();
    if (!value || profileData.skills.includes(value)) return;

    setProfileData((prev) => ({
      ...prev,
      skills: [...prev.skills, value],
      _skillInput: "",
    }));
  };

  const handleRemoveSkill = (skillToRemove) => {
    setProfileData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove),
    }));
  };

  const handleSave = async () => {
    const payload = {
      name: profileData.name,
      cvLink: profileData.cvLink,
      githubLink: profileData.githubLink,
      portfolioLink: profileData.portfolioLink,
      skills: profileData.skills,
    };

    await onSave(payload);
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <h2>Modifier le profil</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" value={profileData.name} onChange={(e) => handleFieldChange("name", e.target.value)}/>
          </div>
          {/* CV */}
          <div className="form-group">
            <label htmlFor="cv">CV</label>
            <input type="text" id="cv" value={profileData.cvLink} onChange={(e) => handleFieldChange("cvLink", e.target.value)}/>
          </div>
          {/* Github */}
          <div className="form-group">
            <label htmlFor="github">Github</label>
            <input type="text" id="github" value={profileData.githubLink} onChange={(e) => handleFieldChange("githubLink", e.target.value)}/>
          </div>
          {/* Portfolio */}
          <div className="form-group">
            <label htmlFor="portfolio">Portfolio</label>
            <input type="text" id="portfolio" value={profileData.portfolioLink} onChange={(e) => handleFieldChange("portfolioLink", e.target.value)}/>
          </div>
          {/* Skills */}
          <div className="form-group">
            <label htmlFor="skills">Compétences</label>
            <input type="text" id="skills" value={profileData._skillInput ?? ""} placeholder="Veuillez rentrer une compétence" onChange={(e) =>
                setProfileData((prev) => ({ ...prev, _skillInput: e.target.value }))
              }
            onKeyDown={(e) => e.key === "Enter" && handleAddSkill(e)}/>
          </div>
          <div className="list-skills">
            {profileData.skills.map((skill) => (
              <span key={skill} className="span-skill">{skill}<button type="button" onClick={() => handleRemoveSkill(skill)}><HugeiconsIcon icon={Cancel01Icon} size={16}/></button></span>
            ))}
          </div>

          {/* Buttons */}
          <div className="popup-actions">
            <button type="button" className="save-btn" onClick={handleSave}>Sauvegarder</button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupEditProfileStudent;
