import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const EverdayEssentials = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                        <Card body>
                            <Row noGutters={true}>
                                <Col >
                                    <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/751052a2-1037-4639-9a19-d9be82d4f6a6_full.jpg?version=1615907478238&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/03f5afc8-7420-48d1-bd02-182325b5b810_full.jpg?version=1615907481099&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/bb6c2092-b582-4618-93a9-6dcb9539509b_full.jpg?version=1615907482776&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                        </Card>
                    </a>
                </Col>
      );
    };

export default EverdayEssentials;