import React from "react";
import { Container, CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";
import { useTranslation } from "react-i18next";

import CarouselBox from "../../Components/carousel-box/carouselBox";
import Comment from "../../Components/comment";

import Chernogor from "../../assets/home/chernogor.jpg";
import Karpati from "../../assets/home/karpati.jpg";
import Sinevir from "../../assets/home/sinevir.jpg";

import { tada } from "react-animations";
import styled, { keyframes } from "styled-components";

const HeadShake = styled.div`
  animation: 4s ${keyframes`${tada}`} infinite;
`;

const Home = () => {
  const { t } = useTranslation(["home", "translation"]);

  return (
    <>
      <CarouselBox />
      <Container>
        <HeadShake>
          <h2 className="mt-4 mb-3">{t("home:description.part1")}</h2>
        </HeadShake>

        <p className="p-home">{t("home:description.part2")}</p>
        <CardDeck>
          <Card bg="light">
            <Card.Title>
              <br />
              {t("home:description.part4")}
            </Card.Title>
            <Card.Img variant="top" src={Karpati} />
            <Card.Body>
              <Card.Text>{t("home:description.part3")}</Card.Text>
            </Card.Body>
            <Link className="link-about" to="/hutsul-marmarosi">
              {t("home:description.part5")} →
            </Link>
          </Card>

          <Card bg="light">
            <Card.Title>{t("home:description.part6")}</Card.Title>
            <Card.Img variant="top" src={Sinevir} />
            <Card.Body>
              <Card.Text>{t("home:description.part7")}</Card.Text>
            </Card.Body>
            <Link className="link-about" to="/borzhava-synevir">
              {t("home:description.part5")} →
            </Link>
          </Card>

          <Card bg="light">
            <Card.Title>{t("home:description.part20")}</Card.Title>
            <Card.Img variant="top" src={Chernogor} />
            <Card.Body>
              <Card.Text>{t("home:description.part8")}</Card.Text>
            </Card.Body>
            <Link className="link-about" to="/montenegrin-ridge">
              {t("home:description.part5")} →
            </Link>
          </Card>
        </CardDeck>

        <div className="interview">
          <p className="interview-ask">{t("home:description.part9")}</p>
          <p className="interview-answer justify">
            {t("home:description.part10")}
            <span>© {t("home:description.part11")}</span>
          </p>
        </div>

        <Comment />
      </Container>
    </>
  );
};
export default Home;
