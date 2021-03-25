import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import activeScythe from "../../../assets/active-img/summer/active-scythe/active-scythe6.jpeg";
import island from "../../../assets/active-img/summer/island/island1.JPG";
import walking from "../../../assets/active-img/summer/walking/walking2.jpg";

function Summer() {
  const { t } = useTranslation(["active", "translation"]);

  return (
    <>
      <div className="hikes-card">
        <h4 className="center none">{t("active:description.part7")}</h4>
        <div className="hikes-img">
          <img src={activeScythe} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("active:description.part7")}</h4>
          <p className="justify px12">{t("active:description.part8")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>26.06.2021</span> <span>— 28.06.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>2580 грн.</span>
          <Link to="/active-scythe">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 5{" "}
        {t("translation:description.part5")} / 4{" "}
        {t("translation:description.part6")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("active:description.part9")}</h4>
        <div className="hikes-img">
          <img src={island} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("active:description.part9")}</h4>
          <p className="justify px12">{t("active:description.part10")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>19.08.2021</span> <span>— 23.08.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>2780 грн.</span>
          <Link to="/island">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 7{" "}
        {t("translation:description.part5")} / 6{" "}
        {t("translation:description.part6")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("active:description.part11")}</h4>
        <div className="hikes-img">
          <img src={walking} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("active:description.part11")}</h4>
          <p className="justify px12">{t("active:description.part12")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part2")}:</span>
          <span>50 грн.</span>
          <Link to="/walking">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line" style={{ marginBottom: "50px" }}></div>
    </>
  );
}

export default Summer;
