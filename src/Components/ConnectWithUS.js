import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const ConnectWithUS = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <Card body>
                            <Row noGutters={true}>
                                <Col >
                                    <CardImg height="70px"  src="https://static.hopscotch.in/fstatic/product/202103/5e12dc04-8a64-453f-8786-ec6717b9aa5a_full.jpg?version=1615822772366&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="80px"  src="https://static.hopscotch.in/fstatic/product/202103/549a8a85-b77c-45ba-8bbc-a7b0a16deed0_full.jpg?version=1615822776448&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="80px"  src="https://static.hopscotch.in/fstatic/product/202103/20774c22-494c-45c3-a0f1-b5de0ba83a77_full.jpg?version=1615822779511&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                        </Card>
                    </a>
                </Col>
      );
    };

export default ConnectWithUS;