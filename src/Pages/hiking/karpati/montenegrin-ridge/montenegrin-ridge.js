import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/hiking-img/karpati-img/chernogor3.JPG';
import Picture2 from '../../../../assets/hiking-img/karpati-img/chernogor/chernogor(5).JPG';
import Picture3 from '../../../../assets/hiking-img/karpati-img/chernogor/chernogor(1).JPG';
import Picture4 from '../../../../assets/hiking-img/karpati-img/chernogor/chernogor(2).JPG';
import Picture5 from '../../../../assets/hiking-img/karpati-img/chernogor/chernogor(3).jpg';
import Picture6 from '../../../../assets/hiking-img/karpati-img/chernogor/chernogor(4).jpg';

import Discounts from '../../../../Components/discounts';
import Sales from '../../../../Components/sales/sales';
import { openModal } from '../../../../Components/open-modal';

const MontenegrinRidge = () => {
    const { t } = useTranslation(["montenegrin-ridge", "translation"]);
        return (
            <Container>
                <h3 className='margin-50'>{t("montenegrin-ridge:description.part1")}</h3>
                <Row>
                    <Col md='9'>
                        <Row>
                            <Col md='7'>
                                <p className='justify'><b>Маршрут:</b> {t("montenegrin-ridge:description.part2")}</p>
                            </Col>
                            <Col md='5' className='hike-data'>
                                <p><b>{t("translation:description.part9")}:</b> 19.06.2021 — 24.06.2021</p>
                                <p><b>{t("translation:description.part4")}:</b> 6 {t("translation:description.part5")} / 5 ночей.</p>
                                <p><b>{t("translation:description.part2")}:</b> 2950 грн.</p>
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
                                    <p className='justify'>{t("montenegrin-ridge:description.part3")}</p>

                                    <h5>1 день</h5>
                                    <p className='justify'>{t("montenegrin-ridge:description.part4")}</p>

                                    <h5>2 день</h5>
                                    <p className='justify'>{t("montenegrin-ridge:description.part5")}</p>

                                    <h5>3 день</h5>
                                    <p className='justify'>{t("montenegrin-ridge:description.part6")}</p>
                                    <p className='justify'>{t("montenegrin-ridge:description.part7")}</p>

                                    <h5>4 день</h5>
                                    <p className='justify'>{t("montenegrin-ridge:description.part8")}</p>
                                    <p className='justify'>{t("montenegrin-ridge:description.part9")}</p>

                                    <h5>5 день</h5>
                                    <p className='justify'>{t("montenegrin-ridge:description.part10")}</p>

                                    <h5>6 день</h5>
                                    <p className='justify'>{t("montenegrin-ridge:description.part11")}</p>

                                    <Row className='hike-info font-italic'>
                                        <Col md='6'>
                                            <p className='mb-2'><b>{t("translation:description.part2")}: 2950 грн.</b></p>
                                            <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                            <ul className='green-point'>
                                                <li><span>{t("montenegrin-ridge:description.part12")}</span></li>
                                                <li><span>{t("montenegrin-ridge:description.part13")}</span></li>
                                                <li><span>{t("montenegrin-ridge:description.part14")}</span></li>
                                                <li><span>{t("montenegrin-ridge:description.part15")}</span></li>
                                                <li><span>{t("montenegrin-ridge:description.part16")}</span></li>
                                            </ul>
                                        </Col>
                                        <Col md='6' className='justify'>
                                            <p className='mb-2 '><b>{t("translation:description.part12")}:</b></p>
                                            <ul className='green-point'>
                                                <li><span>{t("montenegrin-ridge:description.part17")}</span></li>
                                                <li><span>{t("montenegrin-ridge:description.part18")}</span></li>
                                                <li><span>{t("montenegrin-ridge:description.part19")}</span></li>
                                                <li><span>{t("montenegrin-ridge:description.part20")}</span></li>
                                            </ul>
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
};

export default MontenegrinRidge;