import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/tours-img/ua-tours-img/going-to-transcarpathia/going-to-transcarpathia1.jpg';
import Picture2 from '../../../../assets/tours-img/ua-tours-img/going-to-transcarpathia/going-to-transcarpathia2.jpg';
import Picture3 from '../../../../assets/tours-img/ua-tours-img/going-to-transcarpathia/going-to-transcarpathia3.jpg';
import Picture4 from '../../../../assets/tours-img/ua-tours-img/going-to-transcarpathia/going-to-transcarpathia4.jpg';
import Picture5 from '../../../../assets/tours-img/ua-tours-img/going-to-transcarpathia/going-to-transcarpathia5.jpg';
import Picture6 from '../../../../assets/tours-img/ua-tours-img/going-to-transcarpathia/going-to-transcarpathia6.jpg';

import Discounts from '../../../../Components/discounts';
import { openModal } from '../../../../Components/open-modal';
import ToursList from '../../../../Components/tours-list';

const GoingToTranscarpathia = () => {
    const { t } = useTranslation(["going-to-transcarpathia", "translation"]);

    return (
        <Container>
            <h3 className='margin-50'>{t("going-to-transcarpathia:description.part1")}</h3>
            <Row>
                <Col md='9'>
                    <Row>
                        <Col md='7'>
                            <p className='justify'>{t("going-to-transcarpathia:description.part2")}</p>
                        </Col>
                        <Col md='5' className='hike-data'>
                            <p><b>{t("translation:description.part9")}:</b></p>
                            <p><b>{t("translation:description.part4")}:</b> 5 {t("translation:description.part5")} / 5 ночей.</p>
                            <p><b>{t("translation:description.part2")}:</b></p>
                            <p className='booking'>{t("going-to-transcarpathia:description.part3")}</p>
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

                                <p className='justify'>{t("going-to-transcarpathia:description.part4")}</p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part5")}</p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part6")}</p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part7")}</p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part8")}</p>

                                <h5>0 день</h5>
                                <p className='justify'>{t("going-to-transcarpathia:description.part9")}</p>

                                <h5>1 день</h5>
                                <p className='justify'>{t("going-to-transcarpathia:description.part10")}</p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part11")}</p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part12")}</p>

                                <h5>2 день</h5>
                                <p className='justify'>{t("going-to-transcarpathia:description.part13")}</p>

                                <h5>3 день</h5>
                                <p className='justify'>{t("going-to-transcarpathia:description.part14")}</p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part15")}</p>

                                <h5>4 день</h5>
                                <p className='justify'>{t("going-to-transcarpathia:description.part16")}</p>

                                <h5>5 день</h5>
                                <p className='justify'>{t("going-to-transcarpathia:description.part17")}</p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part18")}</p>

                                <h5>6 день</h5>
                                <p className='justify'>{t("going-to-transcarpathia:description.part19")} </p>
                                <p className='justify'>{t("going-to-transcarpathia:description.part20")}</p>

                                <p className='justify red font-weight-bold'>{t("going-to-transcarpathia:description.part21")}</p>

                                <Row className='hike-info font-italic'>
                                    <Col md='6'>
                                        <p className='mb-2'><b>{t("translation:description.part2")}: </b></p>
                                        <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("going-to-transcarpathia:description.part22")}</span></li>
                                            <li><span>{t("going-to-transcarpathia:description.part23")}</span></li>
                                            <li><span>{t("going-to-transcarpathia:description.part24")}</span></li>
                                            <li><span>{t("going-to-transcarpathia:description.part25")}</span></li>
                                            <li><span>{t("going-to-transcarpathia:description.part26")}</span></li>
                                            <li><span>{t("going-to-transcarpathia:description.part27")}</span></li>
                                        </ul>
                                    </Col>
                                    <Col md='6' className='justify'>
                                        <p className='m-0'><b>{t("translation:description.part12")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("going-to-transcarpathia:description.part28")}</span></li>
                                            <li><span>{t("going-to-transcarpathia:description.part29")}</span></li>
                                            <li><span>{t("going-to-transcarpathia:description.part30")}</span></li>
                                        </ul>
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
                        <ToursList />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default GoingToTranscarpathia;