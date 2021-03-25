import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./blog.css";

import { useTranslation } from "react-i18next";

import Karpati from "../../assets/hiking-img/karpati-img/karpati2.JPG";
import Marmarosi from "../../assets/hiking-img/karpati-img/marmarosi.JPG";
import Borzhava from "../../assets/hiking-img/karpati-img/borzhava10/borzhava102.JPG";
import Chernogor from "../../assets/hiking-img/karpati-img/chernogor/chernogor(3).jpg";
import Borzhava2 from "../../assets/hiking-img/karpati-img/borjava.JPG";
import Chernogor2 from "../../assets/hiking-img/karpati-img/chernogor/chernogor(1).JPG";

const Blog = () => {
  const { t } = useTranslation(["blog"]);
  return (
    <Container className="mt-5 Blog">
      <h4 className="center blog-h-mob">{t("blog:description.part2")}</h4>
      <Row className="mt-4">
        <Col md="3">
          <img src={Karpati} alt="karpati" width="100%" />
        </Col>
        <Col md="9">
          <h4 className="center mb-3 blog-h-desk">
            {t("blog:description.part2")}
          </h4>
          <p className="justify">
            {t("blog:description.part3")}
            <Link to="/report-carpathian">
              ...{t("blog:description.part1")}
            </Link>
          </p>
        </Col>
      </Row>
      <div className="line mt-5 mb-5 p-0"></div>

      <h4 className="center blog-h-mob">{t("blog:description.part4")}</h4>
      <Row className="mt-4">
        <Col md="3">
          <img src={Marmarosi} alt="karpati" width="100%" />
        </Col>
        <Col md="9">
          <h4 className="center mb-3 blog-h-desk">
            {t("blog:description.part4")}
          </h4>
          <p className="justify">
            {t("blog:description.part5")}
            <Link to="/report-heroes">...{t("blog:description.part1")}</Link>
          </p>
        </Col>
      </Row>
      <div className="line mt-5 mb-5 p-0"></div>

      <h4 className="center blog-h-mob">{t("blog:description.part6")}</h4>
      <Row className="mt-4">
        <Col md="3">
          <img src={Borzhava} alt="karpati" width="100%" />
        </Col>
        <Col md="9">
          <h4 className="center mb-3 blog-h-desk">
            {t("blog:description.part6")}
          </h4>
          <p className="justify">
            {t("blog:description.part7")}
            <Link to="/report-borzhava">...{t("blog:description.part1")}</Link>
          </p>
        </Col>
      </Row>
      <div className="line mt-5 mb-5 p-0"></div>

      <h4 className="center blog-h-mob">{t("blog:description.part8")}</h4>
      <Row className="mt-4">
        <Col md="3">
          <img src={Chernogor} alt="karpati" width="100%" />
        </Col>
        <Col md="9">
          <h4 className="center mb-3 blog-h-desk">
            {t("blog:description.part8")}
          </h4>
          <p className="justify">
            {t("blog:description.part9")}
            <Link to="/report-10days">...{t("blog:description.part1")}</Link>
          </p>
        </Col>
      </Row>
      <div className="line mt-5 mb-5 p-0"></div>

      <h4 className="center blog-h-mob">{t("blog:description.part10")}</h4>
      <Row className="mt-4">
        <Col md="3">
          <img src={Borzhava2} alt="karpati" width="100%" />
        </Col>
        <Col md="9">
          <h4 className="center mb-3 blog-h-desk">
            {t("blog:description.part10")}
          </h4>
          <p className="justify">
            {t("blog:description.part11")}
            <Link to="/report-lakes">...{t("blog:description.part1")}</Link>
          </p>
        </Col>
      </Row>
      <div className="line mt-5 mb-5 p-0"></div>

      <h4 className="center blog-h-mob">{t("blog:description.part12")}</h4>
      <Row className="mt-4 mb-5">
        <Col md="3">
          <img src={Chernogor2} alt="karpati" width="100%" />
        </Col>
        <Col md="9">
          <h4 className="center mb-3 blog-h-desk">
            {t("blog:description.part12")}
          </h4>
          <p className="justify">
            {t("blog:description.part13")}
            <Link to="/report-ridge">...{t("blog:description.part1")}</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Blog;
