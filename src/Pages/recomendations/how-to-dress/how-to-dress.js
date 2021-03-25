import React from 'react';

import { useTranslation } from "react-i18next";

const HowToDress =()=> {
    const { t } = useTranslation(["how-to-dress"]);
        return (
            <div className='mt-5 mb-5 justify'>
                <h3>{t("how-to-dress:description.part1")}</h3>
                <p>{t("how-to-dress:description.part2")}</p>
                <p>{t("how-to-dress:description.part3")}</p>
                <p>{t("how-to-dress:description.part4")}</p>
                <p>{t("how-to-dress:description.part5")}</p>
                <p>{t("how-to-dress:description.part6")}</p>

                <h5>{t("how-to-dress:description.part7")}</h5>
                <p>{t("how-to-dress:description.part8")}</p>

                <h5>{t("how-to-dress:description.part9")}</h5>
                <p>{t("how-to-dress:description.part10")}</p>
                <p>{t("how-to-dress:description.part11")}</p>

                <h5>{t("how-to-dress:description.part12")}</h5>
                <p>{t("how-to-dress:description.part13")}</p>
                <p>{t("how-to-dress:description.part14")}</p>
                <p>{t("how-to-dress:description.part15")}</p>
            </div>
        );
};

export default HowToDress;