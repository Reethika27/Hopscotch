import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const FestiveCollections = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                        <Card body>
                            <Row noGutters={true}>
                                <Col >
                                    <CardImg height="300px"  src="https://static.hopscotch.in/fstatic/product/202103/700cd99b-1328-421b-8391-965a179102d7_full.jpg?version=1615827423128&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="100px"  src="https://static.hopscotch.in/fstatic/product/202103/0dff0b82-67d5-4700-b2d3-4c2746558c28_full.jpg?version=1615827420162&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="100px"  src="https://static.hopscotch.in/fstatic/product/202103/be5a33ef-2444-4e60-83bc-9f17ab06a761_full.jpg?version=1615827422577&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="100px"  src="https://static.hopscotch.in/fstatic/product/202103/b9e30cc7-1959-4c87-8de2-32961ba31d5a_full.jpg?version=1615827424385&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                        </Card>
                    </a>
                </Col>
      );
    };

export default FestiveCollections;