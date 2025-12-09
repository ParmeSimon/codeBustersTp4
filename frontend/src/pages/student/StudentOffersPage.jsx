import { useRef } from "react";
import style from "../../styles/student.module.css";
import HeaderStudent from "./widgets/HeaderStudent";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Location06Icon
} from "@hugeicons/core-free-icons";

function StudentOffersPage() {
  const prevRefOffer = useRef(null);
  const nextRefOffer = useRef(null);
  return (
    <div className={style.studentOffer}>
      <HeaderStudent />

      {/* Filters */}
      <form className={style.form}>
        {/* Search */}
        <div className={style.inputWrapper}>
          <input type="search" placeholder="Rechercher un poste" className={style.formSearch} />
          <HugeiconsIcon icon={Search01Icon} />
        </div>
        <div className={style.subfilter}>
          {/* Type de contrat */}
          <select>
            <option>Type de contrat</option>
            <option>STAGE</option>
            <option>ALTERNANCE</option>
            <option>CDI</option>
            <option>CDD</option>
          </select>

          {/* Mes candidatures ou non */}
          <select>
            <option>Toutes</option>
            <option>Mes candidatures</option>
            <option>Pas candidater</option>
          </select>

          {/* Localisation */}
          <div className={style.inputWrapper}>
            <input type="search" placeholder="Localisation" className={style.localisation} />
            <HugeiconsIcon icon={Location06Icon} />
          </div>
        </div>
      </form>

      {/* Offers */}
      <div className={style.offers}>
        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg"/>
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>CDI pour un développeur Python expérimenté. Travail sur des applications web avec Django et PostgreSQL.</p>
            <button>Voir l'offre</button>
          </div>
        </div>  

        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>CDI pour un développeur Python expérimenté. Travail sur des applications web avec Django et PostgreSQL.</p>
            <button>Voir l'offre</button>
          </div>
        </div>

        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>CDI pour un développeur Python expérimenté. Travail sur des applications web avec Django et PostgreSQL.</p>
            <button>Voir l'offre</button>
          </div>
        </div>

        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>CDI pour un développeur Python expérimenté. Travail sur des applications web avec Django et PostgreSQL.</p>
            <button>Voir l'offre</button>
          </div>
        </div>

        <div className={style.offer}>
          <img src="https://images.radio-canada.ca/v1/ici-regions/16x9/espace-travail-partage-bureaux.jpg" />
          <div className={style.detail}>
            <h2>Développeur Python/Django - Lyon</h2>
            <p>CDI pour un développeur Python expérimenté. Travail sur des applications web avec Django et PostgreSQL.</p>
            <button>Voir l'offre</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentOffersPage;
