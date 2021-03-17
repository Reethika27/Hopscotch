import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const CharacterShop = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                        <Card body>
                            <Row noGutters={true}>
                                <Col >
                                    <CardImg height="300px"  src="https://static.hopscotch.in/fstatic/product/202103/9b523765-70c1-4370-a933-de35a29907af_full.jpg?version=1615825102906&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="300px"  src="https://static.hopscotch.in/fstatic/product/202103/2af8e030-28b6-44da-ac7e-97115b07d9d7_full.jpg?version=1615825106835&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>

                            </Row>
                            
                        </Card>
                    </a>
                </Col>
      );
    };

export default CharacterShop;