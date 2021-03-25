import React from 'react';
import { Container } from 'react-bootstrap';

import { useTranslation } from "react-i18next";

const ReportLakes = () => {
    const { t } = useTranslation(["report-lakes"]);

    return (
        <Container className='mt-5 mb-5' style={{ textIndent: '40px' }}>
            <h3>{t("report-lakes:description.part1")}</h3>
            <h5>{t("report-lakes:description.part2")}</h5>
            <p className='justify'>{t("report-lakes:description.part3")}</p>
            <p className='justify'>{t("report-lakes:description.part4")}</p>
            <p className='justify'>{t("report-lakes:description.part5")}</p>
            <p className='justify'>{t("report-lakes:description.part6")}</p>
            <p className='justify'>{t("report-lakes:description.part7")}</p>
            <p className='justify'>{t("report-lakes:description.part8")}</p>
            <p className='justify'>{t("report-lakes:description.part9")}</p>
            <p className='justify'>{t("report-lakes:description.part10")}</p>
            <p className='justify'>{t("report-lakes:description.part11")}</p>
            <p className='justify'>{t("report-lakes:description.part12")}</p>
        </Container>
    );
}

export default ReportLakes;