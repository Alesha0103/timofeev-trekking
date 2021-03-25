import React from 'react';

import { useTranslation } from "react-i18next";

const Fears =()=> {
    const { t } = useTranslation(["fears"]);
        return (
            <div className='mt-5 mb-5 justify' style={{ minHeight: '75vh' }}>
                <h3>{t("fears:description.part1")}</h3>
                <p>1. {t("fears:description.part2")}</p>
                <p>{t("fears:description.part3")}</p>
                <p>2. {t("fears:description.part4")}</p>
                <p>{t("fears:description.part5")}</p>
                <p>3. {t("fears:description.part6")}</p>
                <p>{t("fears:description.part7")}</p>
                <p>4. {t("fears:description.part8")}</p>
                <p>{t("fears:description.part9")}</p>
                <p>5. {t("fears:description.part10")}</p>
                <p>{t("fears:description.part11")}</p>
                <p>6. {t("fears:description.part12")}</p>
                <p>{t("fears:description.part13")}</p>
                <p>7. {t("fears:description.part14")}</p>
                <p>{t("fears:description.part15")}</p>
            </div>
        );
};

export default Fears;