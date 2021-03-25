import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { useTranslation } from "react-i18next";

const Necessary =()=> {
    const { t } = useTranslation(["necessary"]);
        return (
            <div className='mt-5 mb-5 justify' style={{ minHeight: '75vh' }}>
                <h3>{t("necessary:description.part1")}</h3>
                <Row>
                    <Col md='6'>
                        <p>1. {t("necessary:description.part2")}</p>
                        <p>2. {t("necessary:description.part3")}</p>
                        <p>3. {t("necessary:description.part4")}</p>
                        <p> <br />4. {t("necessary:description.part5")}</p>
                        <p>5. {t("necessary:description.part6")}</p>
                        <p>6. {t("necessary:description.part7")}</p>
                        <p>7. {t("necessary:description.part8")}</p>
                        <p>8. {t("necessary:description.part9")}</p>
                        <p>9. {t("necessary:description.part10")}</p>
                        <p>10. {t("necessary:description.part11")}</p>
                        <p>11. {t("necessary:description.part12")}</p></Col>
                    <Col md='6' >
                        <p>12. {t("necessary:description.part13")}</p>
                        <p>13. {t("necessary:description.part14")}</p>
                        <p>14. {t("necessary:description.part15")}</p>
                        <p>15. {t("necessary:description.part16")}</p>
                        <p>16. {t("necessary:description.part17")}</p>
                        <p>17. {t("necessary:description.part18")}</p>
                        <p>18. {t("necessary:description.part19")}</p>
                        <p>19. {t("necessary:description.part20")}</p>
                        <p>20. {t("necessary:description.part21")}</p>
                        <p>21. {t("necessary:description.part22")}</p>
                        <p>22. {t("necessary:description.part23")}</p></Col >
                </Row>
                <p className='red font-weight-bold'>{t("necessary:description.part24")}</p>
            </div >
        );
};

export default Necessary;