import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Rozumovka from "../../../assets/hiking-img/ZP/rozumovka/rozumovka1.jpg";
import Weekend from "../../../assets/hiking-img/ZP/active-weekend/active-weekend1.jpg";
import Sea from "../../../assets/hiking-img/ZP/scythe/scythe4.jpg";
import Granite from "../../../assets/hiking-img/ZP/granite-rocks/granite-rocks1.jpg";
import GreatLea from "../../../assets/hiking-img/ZP/great-lea/great-lea1.JPG";
import Khortitsya from "../../../assets/hiking-img/ZP/khortitsya/khortitsya1.jpeg";

const ZP = () => {
  const { t } = useTranslation(["hiking", "translation"]);
  return (
    <>
      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part18")}</h4>
        <div className="hikes-img">
          <img src={Rozumovka} alt="zaporozhye" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part18")}</h4>
          <p className="justify px12">{t("hiking:description.part19")}</p>
        </div>
        <div className="hikes-about">
          <span className="red">
            <b>{t("translation:description.part8")}!</b>
          </span>
          <Link to="/rozumovka">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 2 дня / 1{" "}
        {t("translation:description.part7")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part20")}</h4>
        <div className="hikes-img">
          <img src={Weekend} alt="zaporozhye" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part20")}</h4>
          <p className="justify px12">{t("hiking:description.part21")}</p>
        </div>
        <div className="hikes-about">
          <span className="red">
            <b>{t("translation:description.part8")}!</b>
          </span>
          <Link to="/active-weekend">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 2 дня / 1{" "}
        {t("translation:description.part7")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part22")}</h4>
        <div className="hikes-img">
          <img src={Sea} alt="zaporozhye" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part22")}</h4>
          <p className="justify px12">{t("hiking:description.part23")}</p>
        </div>
        <div className="hikes-about">
          <span className="red">
            <b>{t("translation:description.part8")}!</b>
          </span>
          <Link to="/scythe">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 3 дня / 2{" "}
        {t("translation:description.part6")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part24")}</h4>
        <div className="hikes-img">
          <img src={Granite} alt="zaporozhye" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part24")}</h4>
          <p className="justify px12">{t("hiking:description.part25")}</p>
        </div>
        <div className="hikes-about">
          <span className="red">
            <b>{t("translation:description.part8")}!</b>
          </span>
          <Link to="/granite-rocks">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 3 дня / 2{" "}
        {t("translation:description.part6")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part26")}</h4>
        <div className="hikes-img">
          <img src={GreatLea} alt="zaporozhye" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part26")}</h4>
          <p className="justify px12">{t("hiking:description.part27")}</p>
        </div>
        <div className="hikes-about">
          <span className="red">
            <b>{t("translation:description.part8")}!</b>
          </span>
          <Link to="/great-lea">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 2 дня / 1{" "}
        {t("translation:description.part7")}.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part28")}</h4>
        <div className="hikes-img">
          <img src={Khortitsya} alt="zaporozhye" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part28")}</h4>
          <p className="justify px12">{t("hiking:description.part29")}</p>
        </div>
        <div className="hikes-about">
          <span className="red">
            <b>{t("translation:description.part8")}!</b>
          </span>
          <Link to="/khortitsya">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line" style={{ marginBottom: "50px" }}>
        {t("translation:description.part4")}: 1 день.
      </div>
    </>
  );
};

export default ZP;
