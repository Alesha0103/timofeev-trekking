import React from 'react';

import { useTranslation } from "react-i18next";

const Tent =()=> {
    const { t } = useTranslation(["tent"]);
        return (
            <div className='mt-5 mb-5 justify'>
                <h3>{t("tent:description.part1")}</h3>
                <p>{t("tent:description.part2")}</p>
                <p>{t("tent:description.part3")}</p>
                <ul>
                    <li>1. {t("tent:description.part4")}</li>
                    <li>2. {t("tent:description.part5")}</li>
                </ul>

                <h5>{t("tent:description.part6")}</h5>
                <p>{t("tent:description.part7")}</p>
                <p>{t("tent:description.part8")}<br />{t("tent:description.part9")}<br />{t("tent:description.part10")}<br />{t("tent:description.part11")}</p>

                <h5>{t("tent:description.part12")}</h5>
                <p>{t("tent:description.part13")}</p>
                <p>{t("tent:description.part14")}</p>

                <h5>{t("tent:description.part15")}</h5>
                <p>{t("tent:description.part16")}</p>

                <p>{t("tent:description.part17")}</p>

                <h5 className='red'>{t("tent:description.part18")}</h5>
                <p>{t("tent:description.part19")}</p>
                <p>{t("tent:description.part20")}</p>
                <p>{t("tent:description.part21")}</p>

            </div >
        );
};

export default Tent;