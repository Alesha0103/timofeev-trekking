import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contacts.css'

import { useTranslation } from "react-i18next";

import Alex from '../../assets/Alex.jpg';

import fb from '../../assets/social-icon/fb.png';
import tel from '../../assets/social-icon/tel.png';
import tw from '../../assets/social-icon/tw.png';
import ut from '../../assets/social-icon/ut.png';
import vb from '../../assets/social-icon/vb.png';
import inst from '../../assets/social-icon/inst.png';

function Contacts() {
    const { t } = useTranslation(["contacts"]);

    const MobOrWeb = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.location.href = "viber://add?number=380970594359";
        } else {
            document.location.href = "viber://chat?number=%2B380970594359";
        }
    }
    return (
        <Container className='mt-5 mb-5 Contacts'>
            <Row>
                <Col md='6' className='contacts-img'>
                    <h3 className='center no-name'>{t("contacts:description.part1")}</h3>
                    <img src={Alex} alt='AlexPhoto' />
                </Col>

                <Col md='6' className='Alex-info'>
                    <h3>{t("contacts:description.part1")}</h3>
                    <p className=' mb-3'>{t("contacts:description.part2")} <br />{t("contacts:description.part3")}</p>
                    <p >{t("contacts:description.part4")}</p>
                    <p>{t("contacts:description.part5")}</p>

                    <Row className='mt-2 Alex-contacts'>
                        <Col md='4' xs='12'>
                            <p>{t("contacts:description.part6")}:</p>
                        </Col>
                        <Col md='8' xs='12'>
                            <a href='https://t.me/Alex_Timofeev'>
                                <p className='mb-1'>+380668643930
                                <img
                                        className='ml-1'
                                        width={25}
                                        height={25}
                                        src={tel}
                                        alt='social'
                                    />
                                </p>
                            </a>

                            <p className='viber mb-1' onClick={MobOrWeb}>+380970594359
                                <img
                                    className='ml-1'
                                    width={25}
                                    height={25}
                                    src={vb}
                                    alt='social'
                                />
                            </p>
                        </Col>
                    </Row>

                    <Row className='mt-2 Alex-contacts'>
                        <Col md='4' xs='12'>
                            <p>email:</p>
                        </Col>
                        <Col md='8' xs='12'>
                            <p> <a href='mailto:timofeev.trekking@gmail.com'>timofeev.trekking@gmail.com</a> </p>

                            <a href='https://www.facebook.com/hike.in.ua'>
                                <img
                                    className='mr-2 mt-2'
                                    width={25}
                                    height={25}
                                    src={fb}
                                    alt='social'
                                />
                            </a>

                            <a href='https://twitter.com/turist_alpinist'>
                                <img
                                    className='mr-2 mt-2'
                                    width={25}
                                    height={25}
                                    src={tw}
                                    alt='social'
                                />
                            </a>

                            <a href='https://www.instagram.com/tourist_alex/'>
                                <img
                                    className='mr-2 mt-2'
                                    width={25}
                                    height={25}
                                    src={inst}
                                    alt='social'
                                />
                            </a>

                            <a href='https://www.youtube.com/channel/UCyKA6DKipBMV2cgLxYkrFjw'>
                                <img
                                    className='mr-0 mt-2'
                                    width={30}
                                    height={30}
                                    src={ut}
                                    alt='social'
                                />
                            </a>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;