import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo193.png";
import { Link } from "react-router-dom";
import "./header.css";

import { useTranslation } from "react-i18next";
import "../../i18n";

import rus from "../../assets/rus.png";
import ua from "../../assets/ua.png";

const Header = () => {
  const { i18n } = useTranslation();

  const { t } = useTranslation(["header", "translation"]);

  const changeLanguage = (ua) => {
    i18n.changeLanguage(ua);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            />{" "}
            TIMOFEEV TREKKING
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Link className="nav-link" to="/">
                {t("header:description.part1")}
              </Link>
              <Link className="nav-link" to="/hiking">
                {t("header:description.part2")}
              </Link>
              <Link className="nav-link" to="/tours">
                {t("header:description.part3")}
              </Link>
              <Link className="nav-link" to="/active">
                {t("header:description.part4")}
              </Link>
              <Link className="nav-link" to="/recomendations">
                {t("header:description.part5")}
              </Link>
              <Link className="nav-link" to="/blog">
                БЛОГ
              </Link>
              <Link className="nav-link" to="/contacts">
                {t("header:description.part6")}
              </Link>
            </Nav>
            <div className="Flags mt-1" style={{ display: "flex" }}>
              <div onClick={() => changeLanguage("ru")}>
                <img
                  src={rus}
                  className="d-inline-block align-top"
                  alt="rus"
                  style={{
                    height: "20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <div onClick={() => changeLanguage("ua")}>
                <img
                  src={ua}
                  className="d-inline-block align-top"
                  alt="ua"
                  style={{
                    height: "20px",
                    width: "20px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
