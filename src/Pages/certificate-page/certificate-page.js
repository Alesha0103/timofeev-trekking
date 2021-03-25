import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './certificate-page.css';

import { useTranslation } from "react-i18next";

import certificate from '../../assets/Certificate.jpg';

import CertificateForm from '../../Components/certificate-form';

const CertificatePage = () => {
    const { t } = useTranslation(["certificate-page"]);

    return (
        <Container>
            <h3 className='margin-50'>{t("certificate-page:description.part1")}</h3>
            <p className='justify'>{t("certificate-page:description.part2")}</p>

            <p>{t("certificate-page:description.part3")}</p>
            <ul className='green-point font-italic'>
                <li><span>{t("certificate-page:description.part4")}</span></li>
                <li><span>{t("certificate-page:description.part5")}</span></li>
                <li><span>{t("certificate-page:description.part6")}</span></li>
                <li><span>{t("certificate-page:description.part7")}</span></li>
            </ul>

            <h5 className='center mt-5 mb-5 certificate-page_line'>{t("certificate-page:description.part8")}</h5>

            <Row className='certificate-img mb-5'>
                <Col md='7'>
                    <img src={certificate} alt='certificate' style={{ width: '100%' }} />
                </Col>
                <Col md='5' className='mt-2'>
                    <CertificateForm />
                </Col>
            </Row>
        </Container >
    );
}

export default CertificatePage;