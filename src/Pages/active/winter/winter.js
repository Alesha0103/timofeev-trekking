import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import newYear from "../../../assets/active-img/winter/new-year/new-year1.jpg";
import skyTour from "../../../assets/active-img/winter/sky-tour/sky-tour1.JPG";

function Winter() {
  const { t } = useTranslation(["active", "translation"]);
  return (
    <>
      <div className="hikes-card">
        <h4 className="center none">{t("active:description.part3")}</h4>
        <div className="hikes-img">
          <img src={newYear} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("active:description.part3")}</h4>
          <p className="justify px12">{t("active:description.part4")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>30.12.2021</span> <span>— 02.01.2022</span>
          </p>
          <p>
            <span>04.01.2022</span> <span>— 08.01.2022</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>4750 грн.</span>
          <Link to="/new-year">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 4 дня / 3{" "}
        {t("translation:description.part6")}, 5{" "}
        {t("translation:description.part5")} / 4{" "}
        {t("translation:description.part6")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("active:description.part5")}</h4>
        <div className="hikes-img">
          <img src={skyTour} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("active:description.part5")}</h4>
          <p className="justify px12">{t("active:description.part6")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>12.02.2021</span> <span>— 02.03.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>5300  грн.</span>
          <Link to="/sky-tour">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line" style={{ marginBottom: "50px" }}>
        {t("translation:description.part4")}: 7{" "}
        {t("translation:description.part5")} / 6 ночей, 5{" "}
        {t("translation:description.part5")} / 4{" "}
        {t("translation:description.part6")}.
      </div>
    </>
  );
}

export default Winter;
