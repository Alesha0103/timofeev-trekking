import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

import { useTranslation } from "react-i18next";

import Winter from './winter';
import Summer from './summer';

const Active =()=> {
    const { t } = useTranslation(["active"]);
        return (
            <Container>
                <Tab.Container id='ledt-tab-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' background='red' className='flex-column mt-2'>

                                <Nav.Item>
                                    <Nav.Link eventKey='first'>{t("active:description.part1")}</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='second'>{t("active:description.part2")}</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>

                                <Tab.Pane eventKey='first'>
                                    <Winter />
                                </Tab.Pane>

                                <Tab.Pane eventKey='second'>
                                    <Summer />
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
};
export default Active;