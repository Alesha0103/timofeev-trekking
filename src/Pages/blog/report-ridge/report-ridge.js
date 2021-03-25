import React from 'react';
import { Container } from 'react-bootstrap';

import { useTranslation } from "react-i18next";

const ReportRidge = () => {
    const { t } = useTranslation(["report-ridge"]);

    return (
        <Container className='mt-5 mb-5' style={{ textIndent: '40px' }}>
            <h3>{t("report-ridge:description.part1")}</h3>

            <h5>{t("report-ridge:description.part2")}</h5>
            <p className='justify'>{t("report-ridge:description.part3")}</p>

            <h5>{t("report-ridge:description.part4")}</h5>
            <p className='justify'>{t("report-ridge:description.part5")}</p>

            <h5>{t("report-ridge:description.part6")}</h5>
            <p className='justify'>{t("report-ridge:description.part7")}</p>

            <h5>{t("report-ridge:description.part8")}</h5>
            <p className='justify'>{t("report-ridge:description.part9")}</p>
            <p className='justify'>{t("report-ridge:description.part10")}</p>
            <p className='justify'>{t("report-ridge:description.part11")}</p>
            <p className='justify'>{t("report-ridge:description.part12")}</p>
            <p className='justify'>{t("report-ridge:description.part13")}</p>
            <p className='justify'>{t("report-ridge:description.part14")}</p>
            <p className='justify'>{t("report-ridge:description.part15")}</p>
            <p className='justify'>{t("report-ridge:description.part16")}</p>
            <p className='justify'>{t("report-ridge:description.part17")}<b> {t("report-ridge:description.part18")}</b></p>

        </Container>
    );
}

export default ReportRidge;