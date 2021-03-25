import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/hiking-img/ZP/rozumovka/rozumovka1.jpg';
import Picture2 from '../../../../assets/hiking-img/ZP/rozumovka/rozumovka2.jpg';
import Picture3 from '../../../../assets/hiking-img/ZP/rozumovka/rozumovka3.jpg';
import Picture4 from '../../../../assets/hiking-img/ZP/rozumovka/rozumovka4.jpg';
import Picture5 from '../../../../assets/hiking-img/ZP/rozumovka/rozumovka5.jpg';
import Picture6 from '../../../../assets/hiking-img/ZP/rozumovka/rozumovka6.jpg';

import Discounts from '../../../../Components/discounts';
import Sales from '../../../../Components/sales/sales';
import { openModal } from '../../../../Components/open-modal';

const Rozumovka = () => {
    const { t } = useTranslation(["rozumovka", "translation"]);

    return (
        <Container>
            <h3 className='margin-50'>{t("rozumovka:description.part1")}</h3>
            <Row>
                <Col md='9'>
                    <Row>
                        <Col md='7'>
                            <p className='justify'><b>Маршрут:</b> {t("rozumovka:description.part2")}</p>
                        </Col>
                        <Col md='5' className='hike-data'>
                            {/* <p><b>Дата маршрута:</b> с 00.00.2021 по 00.00.2021</p> */}
                            <p className='center'><b>{t("translation:description.part4")}:</b> 2 {t("translation:description.part15")} / 1 {t("translation:description.part7")}.</p>
                            <p className='center red'><b>{t("translation:description.part8")}</b></p>
                            <Link to='/request'><Button variant="danger" className='mt-2' style={{ width: '100%' }}>{t("translation:description.part10")}</Button></Link>
                        </Col>
                        <Col md='12' className='mt-4'>
                            <div className='gallary-img'>
                                <div>
                                    <img src={Picture1} alt='Zaporizhzhia' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture2} alt='Zaporizhzhia' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture3} alt='Zaporizhzhia' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture4} alt='Zaporizhzhia' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture5} alt='Zaporizhzhia' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture6} alt='Zaporizhzhia' onClick={openModal} />
                                </div>
                            </div>

                            <div className='myModal' id='myModal'>
                                <Carousel interval={100000}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Picture1}
                                            alt="1 slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Picture2}
                                            alt="2 slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Picture3}
                                            alt="3 slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Picture4}
                                            alt="4 slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Picture5}
                                            alt="5 slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Picture6}
                                            alt="6 slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className='overlay' id='overlay'></div>
                        </Col>



                        <Col md='12'>
                            <div className='gallary-text mb-4'>
                                <p className='justify'>{t("rozumovka:description.part3")}</p>
                                <p className='justify'>{t("rozumovka:description.part4")}</p>
                                <p className='justify'>{t("rozumovka:description.part5")}</p>

                                <Row className='hike-info font-italic'>
                                    <Col md='6'>
                                        {/* <p className='mb-2'><b>Стоимость: грн.</b></p> */}
                                        <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("rozumovka:description.part6")}</span></li>
                                            <li><span>{t("rozumovka:description.part7")}</span></li>
                                            <li><span>{t("rozumovka:description.part8")}</span></li>
                                        </ul>
                                    </Col>
                                    <Col md='6' className='justify'>
                                        <p className='mb-1'><b>{t("translation:description.part12")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("rozumovka:description.part9")}</span></li>
                                            <li><span>{t("rozumovka:description.part10")}</span></li>
                                            <li><span>{t("rozumovka:description.part11")}</span></li>
                                            <li><span>{t("rozumovka:description.part12")}</span></li>
                                        </ul>
                                        <p className='mb-1'>{t("translation:description.part13")}</p>
                                        <p className='mb-0 text-left'><b>{t("translation:description.part14")}:</b> <a href='tel:380970594359'>+380970594359</a> <a href='tel:380668643930'>+380668643930</a></p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md='3' className='hike-data hike-sales'>
                    <div className='certificate'>
                        <Discounts />
                        <Sales />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default Rozumovka;