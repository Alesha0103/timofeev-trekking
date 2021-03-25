import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import { useTranslation } from "react-i18next";

import Picture1 from '../../../../assets/active-img/winter/new-year/new-year1.jpg';
import Picture2 from '../../../../assets/active-img/winter/new-year/new-year2.JPG';
import Picture3 from '../../../../assets/active-img/winter/new-year/new-year3.JPG';
import Picture4 from '../../../../assets/active-img/winter/new-year/new-year4.JPG';
import Picture5 from '../../../../assets/active-img/winter/new-year/new-year5.JPG';
import Picture6 from '../../../../assets/active-img/winter/new-year/new-year6.JPG';

import Discounts from '../../../../Components/discounts';
import { openModal } from '../../../../Components/open-modal';
import ToursList from '../../../../Components/tours-list';

const NewYear = () => {
    const { t } = useTranslation(["new-year", "translation"]);

    return (
        <Container>
            <h3 className='margin-50'>{t("new-year:description.part1")}</h3>
            <Row>
                <Col md='9'>
                    <Row>
                        <Col md='12'>
                            <p><b>{t("new-year:description.part40")}:</b> {t("new-year:description.part2")}</p>
                        </Col>

                        <Col>
                            <p className='mb-2'><b>Дата:</b> {t("new-year:description.part39")}</p>
                            <p className='mb-2'><b>{t("translation:description.part4")}: </b>4 {t("translation:description.part15")} / 3 {t("translation:description.part6")}, 5 {t("translation:description.part5")} / 4 {t("translation:description.part6")}.</p>
                            <p className='mb-0'><b>{t("translation:description.part2")}:</b> 4750 грн.</p>
                        </Col>

                        <Col md='5' className='hike-data'>
                            <p className='booking'>{t("new-year:description.part3")}</p>
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

                                <p className='justify'>{t("new-year:description.part4")}</p>
                                <p className='justify'>{t("new-year:description.part5")}</p>
                                <p className='justify'>{t("new-year:description.part6")}</p>

                                <h5>{t("new-year:description.part7")}</h5>
                                <h5>{t("new-year:description.part8")}</h5>
                                <p className='justify'>{t("new-year:description.part9")}</p>

                                <h5>1 день: (30.12/04.01)</h5>
                                <p className='justify'>{t("new-year:description.part10")}</p>
                                <p className='justify'>{t("new-year:description.part11")}</p>

                                <h5>2 день: (30.12/05.01)</h5>
                                <p className='justify'>{t("new-year:description.part12")}</p>

                                <h5>3 день: (31.12/06.01)</h5>
                                <p className='justify'>{t("new-year:description.part13")}</p>
                                <p className='justify'>{t("new-year:description.part14")}</p>
                                <p className='justify'>{t("new-year:description.part15")}</p>

                                <h5>4 день: ( 01.01/07.01)</h5>
                                <p className='justify'>{t("new-year:description.part16")}</p>
                                <p className='justify'>{t("new-year:description.part17")}</p>
                                <p className='justify'>{t("new-year:description.part18")}</p>

                                <h5>5 день: (02.01/08.01)</h5>
                                <p className='justify'>{t("new-year:description.part19")}</p>
                                <ul className='green-point'>
                                    <li><span>{t("new-year:description.part20")}</span></li>
                                    <li><span>{t("new-year:description.part21")}</span></li>
                                    <li><span>{t("new-year:description.part22")}</span></li>
                                    <li><span>{t("new-year:description.part23")}</span></li>
                                    <li><span>{t("new-year:description.part24")}</span></li>
                                    <li><span>{t("new-year:description.part25")}</span></li>
                                </ul>

                                <p className='justify'>{t("new-year:description.part26")}</p>
                                <p className='justify'>{t("new-year:description.part27")}</p>

                                <p className='justify red font-weight-bold'>{t("new-year:description.part28")}</p>

                                <Row className='hike-info font-italic'>
                                    <Col md='6'>
                                        <p className='mb-2'><b>{t("translation:description.part2")}:</b> {t("new-year:description.part29")}</p>
                                        <p className='m-0'><b>{t("translation:description.part11")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("new-year:description.part30")}</span></li>
                                            <li><span>{t("new-year:description.part31")}</span></li>
                                            <li><span>{t("new-year:description.part32")}</span></li>
                                            <li><span>{t("new-year:description.part33")}</span></li>
                                            <li><span>{t("new-year:description.part34")}</span></li>
                                        </ul>
                                    </Col>
                                    <Col md='6'>
                                        <p className='m-0'><b>{t("translation:description.part12")}:</b></p>
                                        <ul className='green-point'>
                                            <li><span>{t("new-year:description.part35")}</span></li>
                                            <li><span>{t("new-year:description.part36")}</span></li>
                                            <li><span>{t("new-year:description.part37")}</span></li>
                                            <li><span>{t("new-year:description.part38")}</span></li>
                                        </ul>
                                    </Col>
                                    <p className='mb-0 text-left'><b>{t("translation:description.part14")}:</b> <a href='tel:380970594359'>+380970594359</a> <a href='tel:380668643930'>+380668643930</a></p>
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
};
export default NewYear;