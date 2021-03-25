import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/active-img/winter/sky-tour/sky-tour1.JPG';
import Picture2 from '../../../../assets/active-img/winter/sky-tour/sky-tour2.JPG';
import Picture3 from '../../../../assets/active-img/winter/sky-tour/sky-tour3.jpg';
import Picture4 from '../../../../assets/active-img/winter/sky-tour/sky-tour4.JPG';
import Picture5 from '../../../../assets/active-img/winter/sky-tour/sky-tour5.JPG';
import Picture6 from '../../../../assets/active-img/winter/sky-tour/sky-tour6.jpg';

import Discounts from '../../../../Components/discounts';
import { openModal } from '../../../../Components/open-modal';
import ToursList from '../../../../Components/tours-list';

const SkyTour = () => {
    const { t } = useTranslation(["sky-tour", "translation"]);

    return (
        <Container>
            <h3 className='margin-50'>{t("sky-tour:description.part1")}</h3>
            <Row>
                <Col md='9'>
                    <Row>
                        <Col md='12'>
                            <p className='justify'>{t("sky-tour:description.part2")}</p>
                        </Col>

                        <Col md='7'>
                            <p className='mb-2'><b>Дата:</b> {t("sky-tour:description.part3")}</p>
                            <p className='mb-2'><b>{t("translation:description.part4")}: </b>7 {t("translation:description.part5")} / 6 ночей, 5 {t("translation:description.part5")} / 4 {t("translation:description.part6")}.</p>
                            <p className='mb-0'><b>{t("translation:description.part2")}:</b> {t("sky-tour:description.part4")}</p>
                        </Col>

                        <Col md='5' className='hike-data'>
                            <p className='booking'>{t("sky-tour:description.part5")}</p>
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
                                <p className='justify'>{t("sky-tour:description.part6")}</p>
                                <p className='justify'>{t("sky-tour:description.part7")}</p>
                                <p className='justify'>{t("sky-tour:description.part8")}</p>
                                <p className='justify'>{t("sky-tour:description.part9")}</p>
                                <p className='justify'>{t("sky-tour:description.part10")}</p>
                                <p className='justify font-weight-bold'>{t("sky-tour:description.part11")}</p>

                                <Row className='hike-info font-italic'>
                                    <Col md='6'>
                                        <p className='mb-2'><b>{t("translation:description.part2")}:</b>  5300 грн.</p>

                                        <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("sky-tour:description.part12")}</span></li>
                                            <li><span>{t("sky-tour:description.part13")}</span></li>
                                            <li><span>{t("sky-tour:description.part14")}</span></li>
                                            <li><span>{t("sky-tour:description.part15")}</span></li>
                                            <li><span>{t("sky-tour:description.part16")}</span></li>
                                        </ul>
                                    </Col>
                                    <Col md='6'>
                                        <p className='m-0'><b>{t("translation:description.part12")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("sky-tour:description.part17")}</span></li>
                                            <li><span>{t("sky-tour:description.part18")}</span></li>
                                            <li><span>{t("sky-tour:description.part19")}</span></li>
                                        </ul>
                                    </Col>
                                    <p className='mb-0 text-left'><b>{t("translation:description.part14")}:</b> <a href='tel:380970594359'>+380970594359</a> <a href='tel:380668643930'>+380668643930</a></p>
                                </Row>

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
export default SkyTour;