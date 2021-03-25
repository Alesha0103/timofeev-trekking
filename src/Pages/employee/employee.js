import React from 'react';
import { Container } from 'react-bootstrap';
import logo2 from '../../assets/logo194.png';

import { useTranslation } from "react-i18next";

import './employee.css'

const Employee = () => {
    const { t } = useTranslation(["employee"]);

    return (
        <Container className='mt-5 mb-5'>
            <h3 className='mb-1'>{t("employee:description.part1")}</h3>
            <h4 className='center mb-3'>{t("employee:description.part2")}</h4>
            <div className='employee-logo' >
                <img src={logo2} alt='logo' />
            </div>

            <p className='justify'>{t("employee:description.part3")}</p>
            <p className='text-left'>{t("employee:description.part4")}</p>
            <ul className='green-point'>
                <li><span>{t("employee:description.part5")}</span></li>
                <li><span>{t("employee:description.part6")}</span></li>
                <li><span>{t("employee:description.part7")}</span></li>
                <li><span>{t("employee:description.part8")}</span></li>
                <li><span>{t("employee:description.part9")}</span></li>
                <li><span>{t("employee:description.part10")}</span></li>
                <li><span>{t("employee:description.part11")}</span></li>
            </ul>

            <p className='justify'>{t("employee:description.part12")} <br />
                                    {t("employee:description.part13")}</p>

            <h5 className='red'>{t("employee:description.part14")}</h5>
            <p className='justify'>{t("employee:description.part15")}</p>

            <h5 className='red'>{t("employee:description.part16")}</h5>
            <p className='justify'>{t("employee:description.part17")}</p>

            <h4 className='center'>{t("employee:description.part18")}</h4>
            <p className='justify'>{t("employee:description.part19")}</p>

            <p className='text-left'>{t("employee:description.part20")}</p>
            <ul className='green-point'>
                <li><span>{t("employee:description.part21")}</span></li>
                <li><span>{t("employee:description.part22")}</span></li>
                <li><span>{t("employee:description.part23")}</span></li>
            </ul>

            <p className='justify'>{t("employee:description.part24")}</p>

            <p className='justify'>{t("employee:description.part25")}</p>
        </Container>
    );
};
export default Employee;