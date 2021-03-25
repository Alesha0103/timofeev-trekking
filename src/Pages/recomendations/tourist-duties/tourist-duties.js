import React from 'react';

import { useTranslation } from "react-i18next";

const TouristDuties =()=> {
    const { t } = useTranslation(["tourist-duties"]);
        return (
            <div className='mt-5 mb-5 justify' style={{ minHeight: '75vh' }}>
                <h3>{t("tourist-duties:description.part1")}</h3>
                <p>1. {t("tourist-duties:description.part2")}</p>
                <p>2. {t("tourist-duties:description.part3")}</p>
                <p>3. {t("tourist-duties:description.part4")}</p>
                <p>4. {t("tourist-duties:description.part5")}</p>
                <p>5. {t("tourist-duties:description.part6")}</p>
                <p>6. {t("tourist-duties:description.part7")}</p>
                <p>7. {t("tourist-duties:description.part8")}</p>
                <p>8. {t("tourist-duties:description.part9")}</p>
                <p>9. {t("tourist-duties:description.part10")}</p>
                <p>10. {t("tourist-duties:description.part11")}</p>
                <p>11. {t("tourist-duties:description.part12")}</p>
                <p>12. {t("tourist-duties:description.part13")}</p>
            </div>
        );
};

export default TouristDuties;