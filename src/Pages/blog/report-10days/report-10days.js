import React from 'react';
import { Container } from 'react-bootstrap';

import { useTranslation } from "react-i18next";

const Report10Days =()=> {
    const { t } = useTranslation(["report-10-days"]);

    return (
        <Container className='mt-5 mb-5' style={{ textIndent: '40px' }}>
            <h3>{t("report-10-days:description.part1")}</h3>
            <p className='justify'>{t("report-10-days:description.part2")}</p>
            <p className='justify'>{t("report-10-days:description.part3")}</p>
            <p className='justify'>{t("report-10-days:description.part4")}</p>
            <p className='justify'>{t("report-10-days:description.part5")}</p>
            <p className='justify'>{t("report-10-days:description.part6")}</p>
            <p className='justify'>{t("report-10-days:description.part7")}</p>
            <p className='justify'>{t("report-10-days:description.part8")}</p>
            <p className='justify'>{t("report-10-days:description.part9")}</p>
            <p className='justify'>{t("report-10-days:description.part10")}</p>
            <p className='justify'>{t("report-10-days:description.part11")}</p>
            <p className='justify'>{t("report-10-days:description.part12")}</p>
            <p className='justify'>{t("report-10-days:description.part13")}</p>
            <p className='justify'>{t("report-10-days:description.part14")}</p>
            <p className='justify'>{t("report-10-days:description.part15")}</p>
            <p className='justify'>{t("report-10-days:description.part16")}</p>
            <p className='justify'>{t("report-10-days:description.part17")}</p>
            <p className='justify'>{t("report-10-days:description.part18")}</p>
            <p className='justify'>{t("report-10-days:description.part19")}</p>
        </Container>
    );
}

export default Report10Days;