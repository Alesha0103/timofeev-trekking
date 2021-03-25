import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import './discounts.css'
import certificate from '../../assets/Certificate.jpg';

const Discounts =()=> {
    const { t } = useTranslation(["discounts"]);
    
        return (
            <div>
                <h4 className='center'>{t("discounts:description.part1")}</h4>
                <div className="arrow-down">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='certificate-box'>
                    <img src={certificate} alt='certificate' />
                </div>
                <Link to='/certificate-page'><Button variant="success" className='certificate-btn' >{t("discounts:description.part2")}</Button></Link>
            </div>
        );
};

export default Discounts;