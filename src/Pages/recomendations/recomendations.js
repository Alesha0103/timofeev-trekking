import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import './recomendations.css';

import { useTranslation } from "react-i18next";

import Tent from './tent';
import Backpack from './backpack';
import SleepingBag from './sleeping-bag';
import Clothes from './clothes';
import TouristDuties from './tourist-duties';
import Necessary from './necessary';
import Fears from './fears';
import HowToDress from './how-to-dress';

const Recomendations =()=> {
    const { t } = useTranslation(["recomendations"]);
        return (
            <Container>
                <Tab.Container id='ledt-tab-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={4}>
                            <Nav variant='pills' background='red' className='flex-column mt-2'>

                                <Nav.Item>
                                    <Nav.Link eventKey='first'>{t("recomendations:description.part1")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='second'>{t("recomendations:description.part2")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='third'>{t("recomendations:description.part3")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>{t("recomendations:description.part4")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='five'>{t("recomendations:description.part5")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='six'>{t("recomendations:description.part6")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='seven'>{t("recomendations:description.part7")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='eight'>{t("recomendations:description.part8")}</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>

                                <Tab.Pane eventKey='first'>
                                    <Necessary />
                                </Tab.Pane>

                                <Tab.Pane eventKey='second'>
                                    <Tent />
                                </Tab.Pane>

                                <Tab.Pane eventKey='third'>
                                    <Backpack />
                                </Tab.Pane>

                                <Tab.Pane eventKey='fourth'>
                                    <SleepingBag />
                                </Tab.Pane>

                                <Tab.Pane eventKey='five'>
                                    <Clothes />
                                </Tab.Pane>

                                <Tab.Pane eventKey='six'>
                                    <TouristDuties />
                                </Tab.Pane>

                                <Tab.Pane eventKey='seven'>
                                    <Fears />
                                </Tab.Pane>

                                <Tab.Pane eventKey='eight'>
                                    <HowToDress />
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
};
export default Recomendations;