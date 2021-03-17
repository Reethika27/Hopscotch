import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const DailyCare = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                        <Card body>
                            <Row noGutters={true}>
                                <Col >
                                    <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/0d68740e-acd2-4245-a7ef-3cb3f32c35c1_full.jpg?version=1615833828133&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/06a61d4a-25b5-46a9-93f2-f3fd6e4e327a_full.jpg?version=1615833829942&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/badac71c-46e9-4c11-a5b9-a57c597e57e9_full.jpg?version=1615833831771&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/e1f8d651-8467-432f-817d-c28ea1c9650e_full.jpg?version=1615833833456&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                        </Card>
                    </a>
                </Col>
      );
    };

export default DailyCare;