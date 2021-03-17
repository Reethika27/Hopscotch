import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const Explore = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                        <br/><br/><br/><br/><br/>
                        <Card body>
                            <Row noGutters={true}>
                                <Col >
                                    <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/d65d6655-8b64-4661-8acc-7124316fd605_full.jpg?version=1615822813164&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/f97fe4c2-3cc5-49a7-8c09-f552d3439b62_full.jpg?version=1615822819533&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/1b9f417d-63ed-4999-ad09-383264d5c3e5_full.jpg?version=1615822822911&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/aacbe54d-118f-4e43-b572-5a9f00162cae_full.jpg?version=1615822825913&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                        </Card>
                    </a>
                </Col>
      );
    };

export default Explore;