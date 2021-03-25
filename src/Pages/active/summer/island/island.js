import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/active-img/summer/island/island1.JPG';
import Picture2 from '../../../../assets/active-img/summer/island/island2.JPG';
import Picture3 from '../../../../assets/active-img/summer/island/island3.JPG';
import Picture4 from '../../../../assets/active-img/summer/island/island4.JPG';
import Picture5 from '../../../../assets/active-img/summer/island/island5.JPG';
import Picture6 from '../../../../assets/active-img/summer/island/island6.JPG';

import Discounts from '../../../../Components/discounts';
import { openModal } from '../../../../Components/open-modal';
import ToursList from '../../../../Components/tours-list';

const Island = () => {
    const { t } = useTranslation(["island", "translation"]);

    return (
        <Container>
            <h3 className='margin-50'>{t("island:description.part1")}</h3>
            <Row>
                <Col md='9'>
                    <Row>
                        <Col md='7'>
                            <p className='justify'>{t("island:description.part2")}</p>
                        </Col>
                        <Col md='5' className='hike-data'>
                            <p><b>{t("translation:description.part9")}:</b> 19.08.2021 — 23.08.2021</p>
                            <p><b>{t("translation:description.part4")}:</b> 7 {t("translation:description.part5")} / 6 ночей.</p>
                            <p><b>{t("translation:description.part2")}:</b> 2780 грн.</p>
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

                                <p className='justify'>{t("island:description.part3")}</p>
                                <p className='justify'>{t("island:description.part4")}</p>
                                <p className='justify'>{t("island:description.part5")}</p>
                                <p className='justify'>{t("island:description.part6")}</p>
                                <p className='justify'>{t("island:description.part7")}</p>
                                <p className='justify'>{t("island:description.part8")}</p>

                                <p className='justify red font-weight-bold mb-1'>{t("island:description.part9")}</p>
                                <p className='justify red font-weight-bold mb-1'>{t("island:description.part10")}</p>
                                <p className='justify red font-weight-bold'>{t("island:description.part11")}</p>

                                <Row className='hike-info font-italic'>
                                    <Col md='6'>
                                        <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("island:description.part12")}</span></li>
                                            <li><span>{t("island:description.part13")}</span></li>
                                            <li><span>{t("island:description.part14")}</span></li>
                                            <li><span>{t("island:description.part15")}</span></li>
                                            <li><span>{t("island:description.part16")}</span></li>
                                        </ul>
                                    </Col>
                                    <Col md='6'>
                                        <p className='m-0'><b>{t("translation:description.part12")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("island:description.part17")}</span></li>
                                            <li><span>{t("island:description.part18")}</span></li>
                                            <li><span>{t("island:description.part19")}</span></li>
                                            <li><span>{t("island:description.part20")}</span></li>
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
export default Island;