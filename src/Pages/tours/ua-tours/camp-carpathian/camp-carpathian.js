import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './camp-carpathian.css';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/tours-img/ua-tours-img/camp-carpathian/camp-carpathian1.jpg';
import Picture2 from '../../../../assets/tours-img/ua-tours-img/camp-carpathian/camp-carpathian2.jpg';
import Picture3 from '../../../../assets/tours-img/ua-tours-img/camp-carpathian/camp-carpathian3.jpg';
import Picture4 from '../../../../assets/tours-img/ua-tours-img/camp-carpathian/camp-carpathian4.jpg';
import Picture5 from '../../../../assets/tours-img/ua-tours-img/camp-carpathian/camp-carpathian5.jpg';
import Picture6 from '../../../../assets/tours-img/ua-tours-img/camp-carpathian/camp-carpathian6.jpg';

import Discounts from '../../../../Components/discounts';
import { openModal } from '../../../../Components/open-modal';
import ToursList from '../../../../Components/tours-list';

const CampCarpathian = () => {
    const { t } = useTranslation(["camp-carpathian", "translation"]);

    return (
        <Container>
            <h3 className='margin-50'>{t("camp-carpathian:description.part1")}</h3>
            <Row>
                <Col md='9'>
                    <Row>
                        <Col md='8'>
                            <p className='mb-1'><b>{t("camp-carpathian:description.part30")}:</b> <br/><b>Весна:</b>  05.03.2021 - 09.03.2021; 12.03.2021 - 16.03.2021; <br/>19.03.2021 - 23.03.2021; 26.03.2021 - 30.03.2021; <br/>08.05.2021 - 12.05.2021;</p>
                            <p><b>{t("camp-carpathian:description.part31")}:</b>  08.10.2021 - 12.10.2021; 15.10.2021 - 19.10.2021; <br/>22.10.2021 - 26.10.2021;</p>
                            <p className='justify'>{t("camp-carpathian:description.part2")}</p>
                        </Col>
                        <Col md='4' className='hike-data'>
                            <p><b>{t("translation:description.part4")}:</b> {t("camp-carpathian:description.part3")}</p>
                            <p><b>{t("translation:description.part2")}:</b> 4450 грн.</p>
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

                                <p className='justify'>{t("camp-carpathian:description.part4")}</p>

                                <h5>{t("camp-carpathian:description.part5")}</h5>
                                <p className='justify'>{t("camp-carpathian:description.part6")}</p>
                                <h5>Маршрут:</h5>
                                <p className='justify'>{t("camp-carpathian:description.part7")}</p>

                                <h5>{t("camp-carpathian:description.part8")}</h5>
                                <p className='justify'>{t("camp-carpathian:description.part9")}</p>
                                <h5>Маршрут:</h5>
                                <p className='justify'>{t("camp-carpathian:description.part10")}</p>

                                <Row className='hike-info font-italic'>
                                    <Col md='6'>
                                        <h5>{t("camp-carpathian:description.part11")}</h5>
                                        <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("camp-carpathian:description.part12")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part13")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part14")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part15")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part16")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part17")}</span></li>
                                        </ul>
                                    </Col>
                                    <Col md='6'>
                                        <h5>{t("camp-carpathian:description.part18")}</h5>
                                        <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("camp-carpathian:description.part19")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part20")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part21")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part22")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part23")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part24")}</span></li>
                                            <li><span>{t("camp-carpathian:description.part25")}</span></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <div className='line'></div>

                                <div className='camp-carpathian_ hike-info font-italic'>
                                    <p className='m-0'><b>{t("translation:description.part12")}:</b></p>
                                    <ul className='green-point'>
                                        <li><span>{t("camp-carpathian:description.part26")}</span></li>
                                        <li><span>{t("camp-carpathian:description.part27")}</span></li>
                                        <li><span>{t("camp-carpathian:description.part28")}</span></li>
                                        <li><span>{t("camp-carpathian:description.part29")}</span></li>
                                    </ul>
                                    <p className='mb-0 text-left'><b>{t("translation:description.part14")}:</b> <a href='tel:380970594359'>+380970594359</a> <a href='tel:380668643930'>+380668643930</a></p>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md='3' className='hike-data hike-sales'>
                    <div className='certificate'>
                        <Discounts />
                        <ToursList />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default CampCarpathian;