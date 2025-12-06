import style from "../../styles/student.module.css";
import HeaderStudent from "./widgets/HeaderStudent";

function StudentOffersPage() {
  return (
    <div className={style.studentOffer}>
      <HeaderStudent />

      {/* Filtres */}
      <form>
        <input type="search" placeholder="Rechercher un poste" />
        <div>
          {/* Type de contrat */}
          <select>
            <option>Type de contrat</option>
          </select>

          {/* Mes candidatures ou non */}
          <select>
            <option>Mes candidatures</option>
          </select>

          {/* Localisation */}
          <input type="search" placeholder="Localisation" />
        </div>
      </form>
    </div>
  );
}

export default StudentOffersPage;
