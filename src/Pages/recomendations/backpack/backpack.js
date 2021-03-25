import React from 'react';
import { useTranslation } from "react-i18next";

import Bag1 from '../../../assets/bag/bag1.jpg';
import Bag2 from '../../../assets/bag/bag2.jpg';
import Bag3 from '../../../assets/bag/bag3.jpg';
import Bag4 from '../../../assets/bag/bag4.jpg';
import Bag5 from '../../../assets/bag/bag5.jpg';
import Bag6 from '../../../assets/bag/bag6.jpg';

const Backpack =()=> {
    const { t } = useTranslation(["backpack"]);
        return (
            <div className='mt-5 mb-5 justify'>
                <h3>РЮКЗАК</h3>
                <p>{t("backpack:description.part1")}</p>
                <p>{t("backpack:description.part2")}</p>

                <h5>{t("backpack:description.part3")}</h5>
                <p>{t("backpack:description.part4")}</p>
                <p>{t("backpack:description.part5")}</p>
                <p>{t("backpack:description.part6")}<br />
                    {t("backpack:description.part7")}<br />
                    {t("backpack:description.part8")}<br />
                    {t("backpack:description.part9")}
                </p>

                <p>{t("backpack:description.part10")}</p>
                <ul>
                    <li>1. {t("backpack:description.part11")}</li>
                    <li>2. {t("backpack:description.part12")}</li>
                    <li>3. {t("backpack:description.part13")}</li>
                    <li>4. {t("backpack:description.part14")}</li>
                    <li>5. {t("backpack:description.part15")}</li>
                    <li>6. {t("backpack:description.part16")}</li>
                    <li>7. {t("backpack:description.part17")}</li>
                    <li>8. {t("backpack:description.part18")}</li>
                    <li>9. {t("backpack:description.part19")}</li>
                    <li>10. {t("backpack:description.part20")}</li>
                </ul>
                <p>{t("backpack:description.part21")}</p>

                <h5>{t("backpack:description.part22")}</h5>
                <p>{t("backpack:description.part23")}</p>
                <p>{t("backpack:description.part24")}</p>
                <div>
                    <img
                        src={Bag1}
                        alt='Bag'
                        className='bag'
                    />
                    <img
                        src={Bag2}
                        alt='Bag'
                        className='bag'
                    />
                    <img
                        src={Bag3}
                        alt='Bag'
                        className='bag'
                    />
                    <img
                        src={Bag4}
                        alt='Bag'
                        className='bag'
                    />
                    <img
                        src={Bag5}
                        alt='Bag'
                        className='bag'
                    />
                    <img
                        src={Bag6}
                        alt='Bag'
                        className='bag'
                    />
                </div>

                <p>{t("backpack:description.part25")}</p>
                <ul>
                    <li>1. {t("backpack:description.part26")}</li>
                    <li>2. {t("backpack:description.part27")}</li>
                    <li>3. {t("backpack:description.part28")}</li>
                    <li>4. {t("backpack:description.part29")}</li>
                </ul>
                <p>{t("backpack:description.part30")}</p>

            </div>
        );
};

export default Backpack;