import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import './hiking.css';

import { useTranslation } from "react-i18next";

import Karpati from './karpati/karpati';
import ZP from './ZP/zp';
// import Trekking from './trekking/trekking';


const Hiking =()=> {
    const { t } = useTranslation(["hiking"]);
        return (
            <Container>
                <Tab.Container id='ledt-tab-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' background='red' className='flex-column mt-2'>

                                <Nav.Item>
                                    <Nav.Link eventKey='first'>{t("hiking:description.part1")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='second'>{t("hiking:description.part2")}</Nav.Link>
                                </Nav.Item>

                                {/* <Nav.Item>
                                    <Nav.Link eventKey='third'>{t("hiking:description.part3")}</Nav.Link>
                                </Nav.Item> */}

                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>

                                <Tab.Pane eventKey='first'>
                                    <Karpati />
                                </Tab.Pane>

                                <Tab.Pane eventKey='second'>
                                    <ZP />
                                </Tab.Pane>

                                {/* <Tab.Pane eventKey='third'>
                                    <Trekking />
                                </Tab.Pane> */}

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
};
export default Hiking;