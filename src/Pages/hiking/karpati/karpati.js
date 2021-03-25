import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Karpati2 from "../../../assets/hiking-img/karpati-img/karpati2.JPG";
import Chernogor2 from "../../../assets/hiking-img/karpati-img/chernogor2.JPG";
import Gorgani from "../../../assets/hiking-img/karpati-img/gorgani.JPG";
import Chernogor3 from "../../../assets/hiking-img/karpati-img/chernogor3.JPG";
import Sinevir from "../../../assets/hiking-img/karpati-img/sinevir.jpg";
import Borjava from "../../../assets/hiking-img/karpati-img/borjava.JPG";
import Marmarosi from "../../../assets/hiking-img/karpati-img/marmarosi.JPG";

const Karpati = () => {
  const { t } = useTranslation(["hiking", "translation"]);
  return (
    <>
      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part4")}</h4>
        <div className="hikes-img">
          <img src={Karpati2} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part4")}</h4>
          <p className="justify px12">{t("hiking:description.part5")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>05.06.2021</span> <span>— 09.06.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>3850 грн.</span>
          <Link to="/hiking/hutsul-marmarosi">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 6{" "}
        {t("translation:description.part5")} / 5 ночей.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part6")}</h4>
        <div className="hikes-img">
          <img src={Chernogor2} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part6")}</h4>
          <p className="justify px12">{t("hiking:description.part7")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>03.07.2021</span> <span>— 12.07.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>3800 грн.</span>
          <Link to="/marmaros-montenegrin">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 10{" "}
        {t("translation:description.part5")} / 9 ночей.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part8")}</h4>
        <div className="hikes-img">
          <img src={Gorgani} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part8")}</h4>
          <p className="justify px12">{t("hiking:description.part9")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>19.07.2021</span> <span>— 24.07.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>2950 грн.</span>
          <Link to="/svidovets-gorgan">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 6{" "}
        {t("translation:description.part5")} / 5 ночей.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part10")}</h4>
        <div className="hikes-img">
          <img src={Chernogor3} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part10")}</h4>
          <p className="justify px12">{t("hiking:description.part11")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>19.06.2021</span> <span>— 24.06.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>2950 грн.</span>
          <Link to="/montenegrin-ridge">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 6{" "}
        {t("translation:description.part5")} / 5 ночей.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part12")}</h4>
        <div className="hikes-img">
          <img src={Sinevir} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part12")}</h4>
          <p className="justify px12">{t("hiking:description.part13")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>02.05.2021</span> <span>— 07.05.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>3100 грн.</span>
          <Link to="/borzhava-synevir">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 7{" "}
        {t("translation:description.part5")} / 6 ночей.
      </div>

      <div className="hikes-card">
        <h4 className="center none">{t("hiking:description.part14")}</h4>
        <div className="hikes-img">
          <img src={Borjava} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part14")}</h4>
          <p className="justify px12">{t("hiking:description.part15")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>31.07.2021</span> <span>— 09.08.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>3900 грн.</span>
          <Link to="/hike-borzhava">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line">
        {t("translation:description.part4")}: 10{" "}
        {t("translation:description.part5")} / 9 ночей.
      </div>

      <div className="hikes-card">
        <h4 className="none">{t("hiking:description.part16")}</h4>
        <div className="hikes-img">
          <img src={Marmarosi} alt="karpati" />
        </div>
        <div className="hikes-content">
          <h4 className="center">{t("hiking:description.part16")}</h4>
          <p className="justify px12">{t("hiking:description.part17")}</p>
        </div>
        <div className="hikes-about">
          <span>{t("translation:description.part1")}:</span>

          <p>
            <span>11.09.2021</span> <span>— 16.09.2021</span>
          </p>

          <span>{t("translation:description.part2")}:</span>
          <span>2950 грн.</span>
          <Link to="/golden-autumn">
            <Button variant="secondary" className="about-btn">
              {t("translation:description.part3")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="line" style={{ marginBottom: "50px" }}>
        {t("translation:description.part4")}: 5{" "}
        {t("translation:description.part5")} / 4{" "}
        {t("translation:description.part6")}.
      </div>
    </>
  );
};

export default Karpati;
