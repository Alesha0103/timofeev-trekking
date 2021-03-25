import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

import "./comment.css";

import inna from "../../assets/home/inna.jpg";
import marina from "../../assets/home/marina.jpg";
import evgenii from "../../assets/home/evgenii.jpg";
import miroslav from "../../assets/home/miroslav.jpg";
import vlada from "../../assets/home/vlada.jpg";

function Comment() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { t } = useTranslation(["home", "translation"]);

  return (
    <>
      <h3 className="comment-h mt-5 mb-4">{t("home:description.part12")}:</h3>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="comment-carousel"
      >
        <Carousel.Item>
          <p className="center name">{t("home:description.part13")}</p>
          <img
            className="d-block"
            src={inna}
            alt="First slide"
            style={{
              borderRadius: "150px",
              width: "35%",
              margin: "auto",
            }}
          />
          <p className="center mt-3 comment-text">
            {t("home:description.part14")}
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <p className="center name">Марина</p>
          <img
            className="d-block"
            src={marina}
            alt="Second  slide"
            style={{
              borderRadius: "150px",
              width: "35%",
              margin: "auto",
            }}
          />
          <p className="center mt-3 comment-text">
            {t("home:description.part15")}
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <p className="center name">{t("home:description.part16")}</p>
          <img
            className="d-block"
            src={evgenii}
            alt="Third  slide"
            style={{
              borderRadius: "150px",
              width: "35%",
              margin: "auto",
            }}
          />
          <p className="center mt-3 comment-text">
            {t("home:description.part17")}
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <p className="center name">Мирослав</p>
          <img
            className="d-block"
            src={miroslav}
            alt="Foure slide"
            style={{
              borderRadius: "150px",
              width: "35%",
              margin: "auto",
            }}
          />
          <p className="center mt-3 comment-text">
            {t("home:description.part18")}
          </p>
        </Carousel.Item>

        <Carousel.Item>
          <p className="center name">Влада</p>
          <img
            className="d-block"
            src={vlada}
            alt="Five slide"
            style={{
              borderRadius: "150px",
              width: "35%",
              margin: "auto",
            }}
          />
          <p className="center mt-3 comment-text">
            {t("home:description.part19")}
          </p>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Comment;
