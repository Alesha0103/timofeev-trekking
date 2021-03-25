import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/hiking-img/karpati-img/chernogor2.JPG';
import Picture5 from '../../../../assets/hiking-img/karpati-img/hutsul-marmarosi/hutsul-marmarosi3.JPG';
import Picture3 from '../../../../assets/hiking-img/karpati-img/marm/marm-black1.JPG';
import Picture2 from '../../../../assets/hiking-img/karpati-img/marm/marm-black2.JPG';
import Picture4 from '../../../../assets/hiking-img/karpati-img/hutsul-marmarosi/hutsul-marmarosi4.JPG';
import Picture6 from '../../../../assets/hiking-img/karpati-img/hutsul-marmarosi/hutsul-marmarosi5.jpg';

import Discounts from '../../../../Components/discounts';
import Sales from '../../../../Components/sales/sales';
import { openModal } from '../../../../Components/open-modal';

const MarmarosMontenegrin =()=> {
    const { t } = useTranslation(["marmaros-montenegrin", "translation"]);

        return (
            <Container>
                <h3 className='margin-50'>{t("marmaros-montenegrin:description.part1")}</h3>
                <Row>
                    <Col md='9'>
                        <Row>
                            <Col md='7'>
                                <p className='justify'><b>Маршрут:</b> {t("marmaros-montenegrin:description.part2")}</p>
                            </Col>
                            <Col md='5' className='hike-data'>
                                <p><b>{t("translation:description.part9")}:</b> 03.07.2021 — 12.07.2021</p>
                                <p><b>{t("translation:description.part4")}:</b> 10 {t("translation:description.part5")} / 9 ночей.</p>
                                <p><b>{t("translation:description.part2")}:</b> 3800 грн.</p>
                                <Link to='/request'><Button variant="danger" className='mt-2' style={{ width: '100%' }}>{t("translation:description.part10")}</Button></Link>
                            </Col>
                            <Col md='12' className='mt-4'>
                                <div className='gallary-img'>
                                    <div>
                                        <img src={Picture1} alt='marmarosi' onClick={openModal} />
                                    </div>
                                    <div>
                                        <img src={Picture2} alt='marmarosi' onClick={openModal} />
                                    </div>
                                    <div>
                                        <img src={Picture3} alt='marmarosi' onClick={openModal} />
                                    </div>
                                    <div>
                                        <img src={Picture4} alt='marmarosi' onClick={openModal} />
                                    </div>
                                    <div>
                                        <img src={Picture5} alt='marmarosi' onClick={openModal} />
                                    </div>
                                    <div>
                                        <img src={Picture6} alt='marmarosi' onClick={openModal} />
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
                                    <p >{t("marmaros-montenegrin:description.part3")}</p>

                                    <h5>0 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part4")}</p>

                                    <h5>1 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part5")}</p>

                                    <h5>2 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part6")}</p>

                                    <h5>3 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part7")}</p>

                                    <h5>4 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part8")}</p>

                                    <h5>5 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part9")}</p>

                                    <h5>6 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part10")}</p>

                                    <h5>7 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part11")}</p>

                                    <h5>8 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part12")}</p>

                                    <h5>9 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part13")}</p>

                                    <h5>10 день</h5>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part14")}</p>
                                    <p className='justify'>{t("marmaros-montenegrin:description.part15")}</p>

                                    <p className='justify red font-weight-bold'>{t("marmaros-montenegrin:description.part16")}</p>

                                    <Row className='hike-info font-italic'>
                                        <Col md='6'>
                                            <p className='mb-2'><b>{t("translation:description.part2")}: 3800 грн.</b></p>
                                            <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                            <ul className='green-point'>
                                                <li><span>{t("marmaros-montenegrin:description.part17")}</span></li>
                                                <li><span>{t("marmaros-montenegrin:description.part18")}</span></li>
                                                <li><span>{t("marmaros-montenegrin:description.part19")}</span></li>
                                                <li><span>{t("marmaros-montenegrin:description.part20")}</span></li>
                                                <li><span>{t("marmaros-montenegrin:description.part21")}</span></li>
                                            </ul>
                                        </Col>
                                        <Col md='6' className='justify'>
                                            <p className='mb-2 '><b>{t("translation:description.part12")}:</b> {t("marmaros-montenegrin:description.part22")}</p>
                                            <p className='mb-2'>{t("translation:description.part13")}</p>
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
}

export default MarmarosMontenegrin;