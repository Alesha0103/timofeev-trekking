import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";
import { Container, Button } from "react-bootstrap";

import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import "./request-form.css";

import sad from "../../assets/sad.png";

class MyRequestForm extends Component {
  state = {
    formErrors: {
      name: "",
      phone: "",
      email: "",
      hiking: "",
      hikingDate: "",
      city: "",
      numbers: "",
      question: "",
    },

    nameValid: false,
    phoneValid: false,
    emailValid: false,
    hikingValid: false,
    hikingDateValid: false,
    cityValid: false,
    numbersValid: false,
    questionValid: false,
    checkboxValid: false,

    formValid: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    emailjs
      .sendForm(
        "service_id",
        "template_id",
        ".contact_form_class",
        "user_id"
      )
      .then(() => {
        this.setState({ sent: true });
      })
      .catch(() => {
        this.setState({ error: true });
      })
      .finally(() => {
        this.setState({ loading: false });
      });

    this.setState({
      name: "",
      phone: "",
      email: "",
      hiking: "",
      hikingDate: "",
      city: "",
      numbers: "",
      question: "",

      checkboxValid: false,
      formValid: false,
    });
  };

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleCheckbox = (e) => {
    this.setState({ checkboxValid: e.target.checked });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;

    let nameValid = this.state.nameValid;
    let phoneValid = this.state.phoneValid;
    let emailValid = this.state.emailValid;
    let hikingValid = this.state.hikingValid;
    let hikingDateValid = this.state.hikingDateValid;
    let cityValid = this.state.cityValid;
    let numbersValid = this.state.numbersValid;
    let checkboxValid = this.state.checkboxValid;

    switch (fieldName) {
      case "name":
        nameValid = value.length > 10;
        fieldValidationErrors.name = nameValid ? "" : " is invalid";
        break;

      case "phone":
        phoneValid = value.match(
          /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/
        );
        fieldValidationErrors.phone = phoneValid ? "" : " is invalid";
        break;

      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;

      case "hiking":
        hikingValid = value.length > 0;
        fieldValidationErrors.hiking = hikingValid ? "" : " is invalid";
        break;

      case "hikingDate":
        hikingDateValid = value.length > 0;
        fieldValidationErrors.hikingDate = hikingDateValid ? "" : " is invalid";
        break;

      case "city":
        cityValid = value.length > 0;
        fieldValidationErrors.city = cityValid ? "" : " is invalid";
        break;

      case "numbers":
        numbersValid = value.length > 0;
        fieldValidationErrors.numbers = numbersValid ? "" : " is invalid";
        break;

      case "checkbox":
        checkboxValid = true;
        fieldValidationErrors.checkbox = checkboxValid ? "" : " is invalid";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        phoneValid: phoneValid,
        emailValid: emailValid,
        hikingValid: hikingValid,
        hikingDateValid: hikingDateValid,
        cityValid: cityValid,
        numbersValid: numbersValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.phoneValid &&
        this.state.emailValid &&
        this.state.hikingValid &&
        this.state.hikingDateValid &&
        this.state.cityValid &&
        this.state.numbersValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "badClass";
  }

  render() {
    const { t } = this.props;

    return this.state.sent ? (
      <SuccessForm />
    ) : this.state.error ? (
      <ErrorForm />
    ) : (
      <div style={{ minHeight: "100vh" }}>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="contact_form_class"
        >
          <h3 className="mb-5 mt-5">{t("request-form:description.part1")}</h3>
          <div className="contact-grid">
            <label>{t("request-form:description.part2")}</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.name
              )}`}
              type="text"
              id="name"
              name="name"
              placeholder={t("request-form:description.part2")}
              value={this.state.name}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="contact-grid">
            <label>Ваш е-mail:</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.email
              )}`}
              type="text"
              id="email"
              name="email"
              placeholder="Ваш е-mail"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="contact-grid">
            <label>{t("request-form:description.part3")}</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.phone
              )}`}
              type="text"
              id="phone"
              name="phone"
              placeholder={t("request-form:description.part14")}
              pattern="[0-9+]*"
              maxLength="13"
              value={this.state.phone}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="contact-grid">
            <label>{t("request-form:description.part4")}</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.hiking
              )}`}
              type="text"
              id="hiking"
              name="hiking"
              placeholder={t("request-form:description.part15")}
              value={this.state.hiking}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="contact-grid">
            <label>Дата:</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.hikingDate
              )}`}
              type="text"
              id="hikingDate"
              name="hikingDate"
              placeholder="Дата"
              value={this.state.hikingDate}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="contact-grid">
            <label>{t("request-form:description.part5")}</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.city
              )}`}
              type="text"
              id="city"
              name="city"
              placeholder={t("request-form:description.part16")}
              value={this.state.city}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="contact-grid">
            <label>{t("request-form:description.part6")}</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.numbers
              )}`}
              type="text"
              id="numbers"
              name="numbers"
              min="0"
              pattern="[0-9]*"
              placeholder={t("request-form:description.part17")}
              value={this.state.numbers}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="contact-grid">
            <label>{t("request-form:description.part7")}</label>
            <input
              className="form-group"
              type="text"
              id="question"
              name="question"
              placeholder={t("request-form:description.part18")}
              value={this.state.question}
              onChange={this.handleUserInput}
            />
          </div>

          <div className="contact-grid_checkbox">
            <label>{t("request-form:description.part8")}</label>
            <input
              className="mt-1"
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={this.state.checkboxValid}
              onChange={this.handleCheckbox}
            />
          </div>

          <Button
            type="submit"
            variant="danger"
            className="mt-4 contact-btn"
            disabled={
              !this.state.formValid ||
              !this.state.checkboxValid ||
              this.state.loading
            }
          >
            {this.state.loading
              ? t("request-form:description.part19")
              : t("request-form:description.part20")}
          </Button>
        </form>
      </div>
    );
  }
}
const RequestFormApp = withTranslation(["request-form"])(MyRequestForm);

export default function RequestForm() {
  return (
    <Suspense fallback="loading">
      <RequestFormApp />
    </Suspense>
  );
}

const SuccessForm = () => {
  const { t } = useTranslation(["request-form"]);

  return (
    <Container className="success-form" style={{ minHeight: "75vh" }}>
      <h1>{t("request-form:description.part9")}</h1>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Button variant="danger" className="mt-4 contact-btn">
          {t("request-form:description.part10")}
        </Button>
      </Link>
    </Container>
  );
};

const ErrorForm = () => {
  const { t } = useTranslation(["request-form"]);

  return (
    <Container
      className="success-form error-form"
      style={{ minHeight: "75vh" }}
    >
      <p>
        {t("request-form:description.part11")}
        <img src={sad} alt="sad emoji" width="25px" />
      </p>
      <p>{t("request-form:description.part12")}</p>
      <p>
        <a href="mailto:timofeev.trekking@gmail.com">
          timofeev.trekking@gmail.com
        </a>
      </p>
    </Container>
  );
};
