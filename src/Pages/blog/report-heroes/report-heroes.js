import React from 'react';
import { Container } from 'react-bootstrap';

import { useTranslation } from "react-i18next";

const ReportHeroes = () => {
    const { t } = useTranslation(["report-heroes"]);

    return (
        <Container className='mt-5 mb-5' style={{ textIndent: '40px' }}>
            <h3>{t("report-heroes:description.part1")}</h3>
            <p className='justify'>{t("report-heroes:description.part2")}</p>
            <p className='justify'>{t("report-heroes:description.part3")}</p>

            <h5>{t("report-heroes:description.part4")}</h5>
            <p className='justify'>{t("report-heroes:description.part5")}</p>
            <p className='justify'>{t("report-heroes:description.part6")}</p>
            <p className='justify'>{t("report-heroes:description.part7")}</p>
            <p className='justify'>{t("report-heroes:description.part8")}</p>
            <p className='justify'>{t("report-heroes:description.part9")}</p>
            <p className='justify'>{t("report-heroes:description.part10")}</p>
            <p className='justify'>{t("report-heroes:description.part11")}</p>
            <p className='justify'>{t("report-heroes:description.part12")}</p>
            <p className='justify'>{t("report-heroes:description.part13")}</p>
            <p className='justify'>{t("report-heroes:description.part14")}</p>
            <p className='justify'>{t("report-heroes:description.part15")}</p>
            <p className='justify'>{t("report-heroes:description.part16")}</p>

            <h5>{t("report-heroes:description.part17")}</h5>
            <p className='justify'>{t("report-heroes:description.part18")}</p>
            <p className='justify'>{t("report-heroes:description.part19")}</p>
            <p className='justify'>{t("report-heroes:description.part20")}</p>
            <p className='justify'>{t("report-heroes:description.part21")}</p>
            <p className='justify'>{t("report-heroes:description.part22")}</p>
            <p className='justify'>{t("report-heroes:description.part23")}</p>
            <p className='justify'>{t("report-heroes:description.part24")}</p>
            <p className='justify'>{t("report-heroes:description.part25")}</p>
            <p className='justify'>{t("report-heroes:description.part26")}</p>

            <h5>{t("report-heroes:description.part27")}</h5>
            <p className='justify'>{t("report-heroes:description.part28")}</p>
            <p className='justify'>{t("report-heroes:description.part29")}</p>
            <p className='justify'>{t("report-heroes:description.part30")}</p>
            <p className='justify'>{t("report-heroes:description.part31")}<br />— Пане Володимиииииииииир!<br />— Йя!</p>
            <p className='justify'>{t("report-heroes:description.part32")}</p>
            <p className='justify'>{t("report-heroes:description.part33")}</p>
            <p className='justify'>{t("report-heroes:description.part34")}</p>
            <p className='justify'>{t("report-heroes:description.part35")}</p>

            <h5>{t("report-heroes:description.part36")}</h5>
            <p className='justify'>{t("report-heroes:description.part37")}</p>
            <p className='justify'>{t("report-heroes:description.part38")}</p>
            <p className='justify'>{t("report-heroes:description.part39")}</p>
            <p className='justify'>{t("report-heroes:description.part40")}</p>
            <p className='justify'>{t("report-heroes:description.part41")}</p>
            <p className='justify'>{t("report-heroes:description.part42")}</p>

            <h5>{t("report-heroes:description.part43")}</h5>
            <p className='justify'>{t("report-heroes:description.part45")}</p>
            <p className='justify'>{t("report-heroes:description.part46")}</p>
            <p className='justify'>{t("report-heroes:description.part47")}</p>
            <p className='justify'>{t("report-heroes:description.part48")}</p>
            <p className='justify'>{t("report-heroes:description.part49")}</p>
            <p className='justify'>{t("report-heroes:description.part50")}</p>
        </Container>
    );
}

export default ReportHeroes;