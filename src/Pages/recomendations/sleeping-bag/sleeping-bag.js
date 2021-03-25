import React from 'react';

import { useTranslation } from "react-i18next";

const SleepingBag =()=> {
    const { t } = useTranslation(["sleeping-bag"]);
        return (
            <div className='mt-5 mb-5 justify'>
                <h3>{t("sleeping-bag:description.part1")}</h3>
                <p className='mb-0'>{t("sleeping-bag:description.part2")}</p>
                <ul>
                    <li>1. {t("sleeping-bag:description.part3")}</li>
                    <li>2. {t("sleeping-bag:description.part4")}</li>
                    <li>3. {t("sleeping-bag:description.part5")}</li>
                </ul>

                <h5>{t("sleeping-bag:description.part6")}</h5>
                <p>{t("sleeping-bag:description.part7")}</p>

                <h5>{t("sleeping-bag:description.part3")}</h5>
                <p>{t("sleeping-bag:description.part8")}</p>
                <p>{t("sleeping-bag:description.part9")}</p>

                <h5>{t("sleeping-bag:description.part4")}</h5>
                <p>{t("sleeping-bag:description.part10")}</p>
                <p>{t("sleeping-bag:description.part11")}</p>
                <p>{t("sleeping-bag:description.part12")}</p>
                <p>{t("sleeping-bag:description.part13")}</p>

                <h5>{t("sleeping-bag:description.part14")}</h5>
                <p>{t("sleeping-bag:description.part15")}</p>
                <p>{t("sleeping-bag:description.part16")}</p>
                <p>{t("sleeping-bag:description.part17")}</p>

                <h5>{t("sleeping-bag:description.part18")}</h5>
                <p>{t("sleeping-bag:description.part19")}</p>
                <p>{t("sleeping-bag:description.part20")}</p>
                <p>{t("sleeping-bag:description.part21")}</p>
                <p>{t("sleeping-bag:description.part22")}</p>
            </div>
        );
};

export default SleepingBag;