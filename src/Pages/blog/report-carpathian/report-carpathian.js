import React from 'react';
import { Container } from 'react-bootstrap';

import { useTranslation } from "react-i18next";

const ReportCarpathian = () => {
    const { t } = useTranslation(["report-carpathian"]);

    return (
        <Container className='mt-5 mb-5' style={{ textIndent: '40px' }}>
            <h3>{t("report-carpathian:description.part1")}</h3>
            <p className='justify'>{t("report-carpathian:description.part2")}</p>
            <p className='justify'>{t("report-carpathian:description.part3")}</p>
            <p className='justify'>{t("report-carpathian:description.part4")}</p>
            <p className='justify'>{t("report-carpathian:description.part5")}</p>
            <p className='justify'>{t("report-carpathian:description.part6")}</p>
            <p className='justify'>{t("report-carpathian:description.part7")}</p>
            <p className='justify'>{t("report-carpathian:description.part8")}</p>
            <p className='justify'>{t("report-carpathian:description.part9")}</p>
            <p className='justify'>{t("report-carpathian:description.part10")}</p>
            <p className='justify'>{t("report-carpathian:description.part11")}</p>
            <p className='justify'>{t("report-carpathian:description.part12")}</p>
            <p className='justify'>{t("report-carpathian:description.part13")}</p>
        </Container>
    );
}

export default ReportCarpathian;