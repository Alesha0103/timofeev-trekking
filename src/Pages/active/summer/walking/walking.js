import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/active-img/summer/walking/walking1.jpg';
import Picture2 from '../../../../assets/active-img/summer/walking/walking2.jpg';
import Picture3 from '../../../../assets/active-img/summer/walking/walking3.jpg';
import Picture4 from '../../../../assets/active-img/summer/walking/walking4.jpg';
import Picture5 from '../../../../assets/active-img/summer/walking/walking5.jpg';
import Picture6 from '../../../../assets/active-img/summer/walking/walking6.jpg';

import Discounts from '../../../../Components/discounts';
import { openModal } from '../../../../Components/open-modal';
import ToursList from '../../../../Components/tours-list';

const Walking = () => {
    const { t } = useTranslation(["walking", "translation"]);

    return (
        <Container>
            <h3 className='margin-50'>{t("walking:description.part1")}</h3>
            <Row>
                <Col md='9'>
                    <Row>
                        <Col md='7'>
                            <p className='justify'>{t("walking:description.part2")}</p>
                        </Col>
                        <Col md='5' className='hike-data'>
                            {/* <p><b>Дата:</b></p> */}
                            <p><b>{t("translation:description.part4")}:</b> {t("walking:description.part3")}</p>
                            <p><b>{t("translation:description.part2")}:</b> 50 грн.</p>
                            <Link to='/request'><Button variant="danger" className='mt-2' style={{ width: '100%' }}>{t("translation:description.part16")}</Button></Link>
                        </Col>
                        <Col md='12' className='mt-4'>
                            <div className='gallary-img'>
                                <div>
                                    <img src={Picture1} alt='borzhava' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture2} alt='borzhava' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture3} alt='borzhava' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture4} alt='borzhava' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture5} alt='borzhava' onClick={openModal} />
                                </div>
                                <div>
                                    <img src={Picture6} alt='borzhava' onClick={openModal} />
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

                                <p className='justify'>{t("walking:description.part4")}</p>
                                <p className='justify'>{t("walking:description.part5")}</p>
                                <p className='justify'>{t("walking:description.part6")}</p>

                                <p className='font-weight-bold mb-1'>{t("walking:description.part7")}</p>
                                <ul className='green-point'>
                                    <li><span>{t("walking:description.part8")}</span></li>
                                    <li><span>{t("walking:description.part9")}</span></li>
                                    <li><span>{t("walking:description.part10")}</span></li>
                                    <li><span>{t("walking:description.part11")}</span></li>
                                </ul>

                                <p className='font-weight-bold mb-1'>{t("walking:description.part12")}</p>
                                <ul className='green-point'>
                                    <li className='red'><span>{t("walking:description.part13")}</span></li>
                                    <li className='red'><span>{t("walking:description.part14")}</span></li>
                                    <li className='red'><span>{t("walking:description.part15")}</span></li>
                                    <li className='red'><span>{t("walking:description.part16")}</span></li>
                                    <li className='red'><span>{t("walking:description.part17")}</span></li>
                                </ul>
                                <p className='mb-0 text-left'><b>{t("translation:description.part14")}:</b> <a href='tel:380970594359'>+380970594359</a> <a href='tel:380668643930'>+380668643930</a></p>

                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md='3' className='hike-data hike-sales'>
                    <div>
                        <Discounts />
                        <ToursList />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default Walking;