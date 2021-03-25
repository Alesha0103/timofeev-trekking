import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import './tours.css';

import { useTranslation } from "react-i18next";

import UaTours from './ua-tours';
// import ForeignTours from './foreign-tours';


const Tours =()=> {
    const { t } = useTranslation(["tour"]);
        return (
            <Container>
                <Tab.Container id='ledt-tab-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' background='red' className='flex-column mt-2'>

                                <Nav.Item>
                                    <Nav.Link eventKey='first'>{t("tour:description.part1")}</Nav.Link>
                                </Nav.Item>

                                {/* <Nav.Item>
                                    <Nav.Link eventKey='second'>{t("tour:description.part2")}</Nav.Link>
                                </Nav.Item> */}


                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>

                                <Tab.Pane eventKey='first'>
                                    <UaTours />
                                </Tab.Pane>

                                {/* <Tab.Pane eventKey='second'>
                                    <ForeignTours />
                                </Tab.Pane> */}

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
};
export default Tours;