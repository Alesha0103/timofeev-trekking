import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import campCarpathian from "../../../assets/tours-img/ua-tours-img/camp-carpathian/camp-carpathian1.jpg";
import goingToTranscarpathia from "../../../assets/tours-img/ua-tours-img/going-to-transcarpathia/going-to-transcarpathia4.jpg";
import roundTheUA from "../../../assets/tours-img/ua-tours-img/round-the-ua/round-the-ua1.JPG";

function UaTours() {
  const { t } = useTranslation(["tour", "translation"]);
  return (
    <>
      <div className="hikes-card">
        <h4 className="center none">{t("tour:description.part3")}</h4>
        <div className="hikes-img">
          <img src={campCarpathian} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("tour:description.part3")}</h4>
          <p className="justify px12">{t("tour:description.part4")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>05.03.2021</span> <span>— 12.05.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>4450 грн.</span>
          <Link to="/camp-carpathian">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 5-7-10{" "}
        {t("translation:description.part5")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("tour:description.part5")}</h4>
        <div className="hikes-img">
          <img src={goingToTranscarpathia} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("tour:description.part5")}</h4>
          <p className="justify px12">{t("tour:description.part6")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          {/* <p>
            <span>00.00.2021</span> <span>— 00.0.2021</span>
          </p> */}

          <span>{t("translation:description.part2")}:</span>
          <span> грн.</span>
          <Link to="/going-to-transcarpathia">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 5{" "}
        {t("translation:description.part5")} / 5{" "}
        {t("translation:description.part6")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("tour:description.part7")}</h4>
        <div className="hikes-img">
          <img src={roundTheUA} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("tour:description.part7")}</h4>
          <p className="justify px12">{t("tour:description.part8")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>24.09.2021</span> <span>— 03.10.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>8735 грн.</span>
          <Link to="/round-the-ua">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line" style={{ marginBottom: "50px" }}>
        {t("translation:description.part4")}: 10{" "}
        {t("translation:description.part5")} / 9 ночей.{" "}
      </div>
    </>
  );
}

export default UaTours;
