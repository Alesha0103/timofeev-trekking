import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import FooterContacts from "../footer-contacts";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./footer.css";

import { bounceIn } from "react-animations";
import styled, { keyframes } from "styled-components";

import logo from "../../assets/logo193.png";

const Bounce = styled.div`
  animation: 4s ${keyframes`${bounceIn}`} infinite;
`;

const Footer = () => {
  const { t } = useTranslation(["footer", "translation"]);

  return (
    <div className="footer">
      <Row>
        <Col md="4">
          <img src={logo} height={150} width={150} alt="logo" />
          <p
            style={{
              color: "#7db639",
              margin: "10px 0",
            }}
          >
            © 2003 - 2020
          </p>
        </Col>
        <Col md="4">
          <Bounce>
            <Link to="/request" style={{ textDecoration: "none" }}>
              <Button variant="danger" size="lg">
                {t("footer:description.part1")}
              </Button>
            </Link>
          </Bounce>
          <Link to="/employee">
            <Button variant="warning">{t("footer:description.part2")}</Button>
          </Link>
        </Col>
        <Col md="3">
          <FooterContacts />
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
