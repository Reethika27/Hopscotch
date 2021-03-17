import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';
import Bycategory from './dummy';
const WeekFlavour = (props) => {
    return (
       
        <Col sm="4">
        <br/>
        <a href="#">
                <Card body>
                <Row noGutters={true}>
                    <Col >
                        <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/b9959d9a-8520-4817-97de-cdf173c8c3f8_full.jpg?version=1615827538157&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    </Row>
                <Row noGutters={true}>
                        <Col>
                            <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/fe8b1586-344d-4a82-980e-9a59e8a48542_full.jpg?version=1615827542185&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/8e91df3d-b4fc-43fc-8fd6-92bf83ecfcaa_full.jpg?version=1615827543135&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/bb914689-0376-441d-abe5-26230d4925be_full.jpg?version=1615827546048&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/f91bc861-ebee-4662-aeb3-77aec3bd6bcf_full.jpg?version=1615827547615&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                </Card>
        </a> 
       </Col>
      );
    };

export default WeekFlavour;