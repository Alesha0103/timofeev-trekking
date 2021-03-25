import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import { useTranslation } from "react-i18next";

import './sales.css'

const Sales =()=> {
    const { t } = useTranslation(["discounts"]);

        return (
            <div>
                <h5 className='center h5-line'>{t("discounts:description.part3")}</h5>
                <div className='discounts'>
                    <div className='sales'>
                        <h5>5%</h5>
                        <span>{t("discounts:description.part4")}</span>
                    </div>
                    <div className='sales'>
                        <h5>7%</h5>
                        <span>{t("discounts:description.part5")}</span>
                    </div>
                    <div className='sales'>
                        <h5>12%</h5>
                        <span>{t("discounts:description.part6")}</span>
                    </div>
                    <div className='sales'>
                        <h5>10%</h5>
                        <span>{t("discounts:description.part7")}</span>
                    </div>
                    <div className='sales'>
                        <h5>10%</h5>
                        <span>{t("discounts:description.part8")}</span>
                    </div>
                </div>

                <Link to='/recomendations'><Button variant="warning" className='mt-2'>{t("discounts:description.part9")}</Button></Link>
            </div>
        );
};

export default Sales;