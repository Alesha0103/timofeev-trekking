import React from 'react';
import { Link } from "react-router-dom";
import './tours-list.css';

import { useTranslation } from "react-i18next";

const ToursList = () => {
    const { t } = useTranslation(["translation", "tour", "hiking"]);

    return (
        <div className='tours-list'>
            <h6 className='center'>{t("tour:description.part1")}</h6>
            <ul className='green-point mb-1 font-italic'>
                <li><span>05.03.2021 — 12.05.2021 <Link to='/camp-carpathian'>«{t("tour:description.part3")}»</Link></span></li>
                <li><span><Link to='/going-to-transcarpathia'>«{t("tour:description.part5")}»</Link></span></li>
                <li><span>24.09.2021 — 03.10.2021 <Link to='/round-the-ua'>«{t("tour:description.part7")}»</Link></span></li>
            </ul>

            {/* <h6 className='center'>Зарубежные Туры</h6>
            <ul className='green-point mb-1 font-italic'>
                <li className='red'><span>00.00.2021 — 00.00.2021 <Link to='/tours'>...ещё тур</Link></span></li>
                <li className='red'><span>00.00.2021 — 00.00.2021 <Link to='/tours'>...ещё тур</Link></span></li>
                <li className='red'><span>00.00.2021 — 00.00.2021 <Link to='/tours'>...ещё тур</Link></span></li>
            </ul> */}

            <h6 className='center'>{t("hiking:description.part1")}</h6>
            <ul className='green-point mb-1 font-italic'>
                <li><span>05.06.2021 — 09.06.2021 <Link to='/hutsul-marmarosi'>«{t("hiking:description.part4")}»</Link></span></li>
                <li><span>03.07.2021 — 12.07.2021 <Link to='/marmaros-montenegrin'>«{t("hiking:description.part6")}»</Link></span></li>
                <li><span>19.07.2021 — 24.07.2021 <Link to='/svidovets-gorgan'>«{t("hiking:description.part8")}»</Link></span></li>
                <li><span>19.06.2021 — 24.06.2021 <Link to='/montenegrin-ridge'>«{t("hiking:description.part10")}»</Link></span></li>
                <li><span>02.05.2021 — 07.05.2021 <Link to='/borzhava-synevir'>«{t("hiking:description.part12")}»</Link></span></li>
                <li><span>31.07.2021 — 09.08.2021 <Link to='/hike-borzhava'>«{t("hiking:description.part14")}»</Link></span></li>
                <li><span>11.09.2021 — 16.09.2021 <Link to='/golden-autumn'>«{t("hiking:description.part16")}»</Link></span></li>
            </ul>

            <h6 className='center'>{t("hiking:description.part2")}</h6>
            <ul className='green-point mb-1 font-italic'>
                <li><span><Link to='/rozumovka'>«{t("hiking:description.part18")}»</Link></span></li>
                <li><span><Link to='/active-weekend'>«{t("hiking:description.part20")}»</Link></span></li>
                <li><span><Link to='/scythe'>«{t("hiking:description.part22")}»</Link></span></li>
                <li><span><Link to='/granite-rocks'>«{t("hiking:description.part24")}»</Link></span></li>
                <li><span><Link to='/great-lea'>«{t("hiking:description.part26")}»</Link></span></li>
                <li><span><Link to='/khortitsya'>«{t("hiking:description.part28")}»</Link></span></li>
            </ul>

            {/* <h6 className='center'>Зарубежный треккинг</h6>
            <ul className='green-point mb-1 font-italic'>
                <li className='red'><span>00.00.2021 — 00.00.2021 <Link to='/hiking'>...ещё тур</Link></span></li>
                <li className='red'><span>00.00.2021 — 00.00.2021 <Link to='/hiking'>...ещё тур</Link></span></li>
                <li className='red'><span>00.00.2021 — 00.00.2021 <Link to='/hiking'>...ещё тур</Link></span></li>
                <li className='red'><span>00.00.2021 — 00.00.2021 <Link to='/hiking'>...ещё тур</Link></span></li>
                <li className='red'><span>00.00.2021 — 00.00.2021 <Link to='/hiking'>...ещё тур</Link></span></li>
            </ul> */}
        </div>
    );
}

export default ToursList;