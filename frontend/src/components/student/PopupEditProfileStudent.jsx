import "../../styles/components/student/popupEditProfileStudent.css";
import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

function PopupEditProfileStudent({ profile, onSave, onClose }) {

  const [name, setName] = useState(profile?.name ?? "");
  const [cvLink, setCvLink] = useState(profile?.cvLink ?? "");
  const [githubLink, setGithubLink] = useState(profile?.githubLink ?? "");
  const [portfolioLink, setPortfolioLink] = useState(profile?.portfolioLink ?? "");
  const [skills, setSkills] = useState(profile?.skills ?? []);
  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    setName(profile?.name ?? "");
    setCvLink(profile?.cvLink ?? "");
    setGithubLink(profile?.githubLink ?? "");
    setPortfolioLink(profile?.portfolioLink ?? "");
    setSkills(profile?.skills ?? []);
  }, [profile]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    const value = skillInput.trim();
    if (!value || skills.includes(value)) return;
    setSkills([...skills, value]);
    setSkillInput("");
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSave = async () => {
    const payload = {
      name,
      cvLink,
      githubLink,
      portfolioLink,
      skills,
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
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          {/* CV */}
          <div className="form-group">
            <label htmlFor="cv">CV</label>
            <input type="text" id="cv" value={cvLink} onChange={(e) => setCvLink(e.target.value)}/>
          </div>
          {/* Github */}
          <div className="form-group">
            <label htmlFor="github">Github</label>
            <input type="text" id="github" value={githubLink} onChange={(e) => setGithubLink(e.target.value)}/>
          </div>
          {/* Portfolio */}
          <div className="form-group">
            <label htmlFor="portfolio">Portfolio</label>
            <input type="text" id="portfolio" value={portfolioLink} onChange={(e) => setPortfolioLink(e.target.value)}/>
          </div>
          {/* Skills */}
          <div className="form-group">
            <label htmlFor="skills">Compétences</label>
            <input type="text" id="skills" value={skillInput} placeholder="Veuillez rentrer une compétence" onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddSkill(e)} />
          </div>
          <div className="list-skills">
            {skills.map((skill) => (
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
