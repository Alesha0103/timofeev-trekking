import React from 'react';
import { useTranslation } from "react-i18next";

const Clothes =()=> {
    const { t } = useTranslation(["clothes"]);
        return (
            <div className='mt-5 mb-5 justify' style={{ minHeight: '75vh' }}>
                <h3>{t("clothes:description.part1")}</h3>
                <p>{t("clothes:description.part2")}</p>
                <p>{t("clothes:description.part3")}</p>
                <p>{t("clothes:description.part4")}</p>
                <p>{t("clothes:description.part5")}</p>
                <p>{t("clothes:description.part6")}</p>
            </div>
        );
};

export default Clothes;