import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RgihtNav from '../pages/Shared/RgihtNav/RgihtNav';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../pages/Shared/Navigationbar/Navigationbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigationbar></Navigationbar>
                <Container>
                    <Row>
                        <Col lg={3}>
                                <LeftNav></LeftNav>
                        </Col>
                        <Col lg={6}>
                           <Outlet></Outlet>
                        </Col>
                        <Col lg={3}>
                                <RgihtNav></RgihtNav>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;