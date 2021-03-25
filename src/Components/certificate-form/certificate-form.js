import React, { Component, Suspense } from "react";
import * as emailjs from "emailjs-com";
import { Container, Button } from "react-bootstrap";

import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import "../../Components/certificate-form/certificate-form.css";

import sad from "../../assets/sad.png";

class MyCertificateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {
        name: "",
        sum: "",
        from: "",
        email: "",
      },

      nameValid: false,
      sumValid: false,
      fromValid: false,
      emailValid: false,
      checkboxValid: false,

      formValid: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_id",
        "template_id",
        ".certificate_form_class",
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
      sum: "",
      from: "",
      email: "",

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
    let sumValid = this.state.sumValid;
    let fromValid = this.state.fromValid;
    let emailValid = this.state.emailValid;
    let checkboxValid = this.state.checkboxValid;

    switch (fieldName) {
      case "name":
        nameValid = value.length > 10;
        fieldValidationErrors.name = nameValid ? "" : " is invalid";
        break;

      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;

      case "sum":
        sumValid = value.length > 0;
        fieldValidationErrors.sum = sumValid ? "" : " is invalid";
        break;

      case "from":
        fromValid = value.length > 0;
        fieldValidationErrors.from = fromValid ? "" : " is invalid";
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
        sumValid: sumValid,
        fromValid: fromValid,
        emailValid: emailValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.sumValid &&
        this.state.fromValid &&
        this.state.emailValid,
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
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="certificate_form_class"
        >
          <div className="certificate-grid">
            <label>Кому:</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.name
              )}`}
              type="text"
              id="name"
              name="name"
              placeholder={t("certificate-form:description.part9")}
              value={this.state.name}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="certificate-grid">
            <label>{t("certificate-form:description.part1")}</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.sum
              )}`}
              type="text"
              id="sum"
              name="sum"
              placeholder={t("certificate-form:description.part10")}
              value={this.state.sum}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="certificate-grid">
            <label>{t("certificate-form:description.part2")}</label>
            <input
              className={`form-group ${this.errorClass(
                this.state.formErrors.from
              )}`}
              type="text"
              id="from"
              name="from"
              placeholder={t("certificate-form:description.part9")}
              value={this.state.from}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="certificate-grid_checkbox">
            <label>{t("certificate-form:description.part3")}</label>
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

          <div className="certificate-grid_checkbox">
            <label>{t("certificate-form:description.part4")}</label>
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
              ? t("certificate-form:description.part11")
              : t("certificate-form:description.part12")}
          </Button>
          <h5 className="center mt-4 mb-5">
            {t("certificate-form:description.part5")}
          </h5>
        </form>
      </div>
    );
  }
}
const CertificateFormApp = withTranslation(["certificate-form"])(
  MyCertificateForm
);

export default function CertificateForm() {
  return (
    <Suspense fallback="loading">
      <CertificateFormApp />
    </Suspense>
  );
}

const SuccessForm = () => {
  const { t } = useTranslation(["certificate-form"]);

  return (
    <Container className="success-form_certificate">
      <p>{t("certificate-form:description.part6")}</p>
    </Container>
  );
};

const ErrorForm = () => {
  const { t } = useTranslation(["certificate-form"]);

  return (
    <Container
      className="success-form_certificate"
      style={{ fontSize: "20px" }}
    >
      <p>
        {t("certificate-form:description.part7")}
        <img src={sad} alt="sad emoji" width="25px" />
      </p>
      <p>{t("certificate-form:description.part8")}</p>
      <p>
        <a href="mailto:timofeev.trekking@gmail.com">
          timofeev.trekking@gmail.com
        </a>
      </p>
    </Container>
  );
};
