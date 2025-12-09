import React, { useRef, useState, useEffect } from "react";
import style from "../../styles/student.module.css";
import HeaderStudent from "./widgets/HeaderStudent";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  Location06Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon
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
      {/* <div>
        <button ref={prevRefOffer}><HugeiconsIcon icon={ArrowLeft01Icon} /></button>
        <button ref={nextRefOffer}><HugeiconsIcon icon={ArrowRight01Icon} /></button>
        <Swiper
          pagination={true}
          keyboard={true}
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={30}
          navigation={{
            prevE: prevRefOffer.current,
            nextEl: nextRefOffer.current
          }}
          loop={true}
          className="mySwiper"
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      </div> */}
    </div>
  );
}

export default StudentOffersPage;
