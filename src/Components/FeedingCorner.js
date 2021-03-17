import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const FeedingCorner = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                        <br/><br/>
                        <Card body>
                            <Row noGutters={true}>
                                <Col >
                                    <CardImg height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/3bc19d7a-4575-4a3e-af8d-97f9129c9562_full.jpg?version=1615825138064&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="100px"  src="https://static.hopscotch.in/fstatic/product/202103/24c361ea-9882-4e2e-b787-e04210c5de93_full.jpg?version=1615825131424&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="100px"  src="https://static.hopscotch.in/fstatic/product/202103/f7faa05c-6d76-4206-9858-c5ee532224b3_full.jpg?version=1615825142652&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                        </Card>
                    </a>
                </Col>
      );
    };

export default FeedingCorner;