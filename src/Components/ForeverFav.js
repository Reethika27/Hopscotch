import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const ForeverFav = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                    <br/>
                        <Card body>
                          
                            <Row noGutters={true}>
                                <Col >
                                    <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/940dd2b1-d1b6-41ab-a50f-c337a665a484_full.jpg?version=1615825393353&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="180px"  src="https://static.hopscotch.in/fstatic/product/202103/fd9f9d7e-749e-432d-a637-b5c837fe93d1_full.jpg?version=1615825409276&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="180px"  src="https://static.hopscotch.in/fstatic/product/202103/e2fae125-1bdf-4c2a-ad75-3789e8e8ee3d_full.jpg?version=1615825412545&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="180px"  src="https://static.hopscotch.in/fstatic/product/202103/615c8fbc-3f43-4f5e-87e6-b8b1a401786c_full.jpg?version=1615825417196&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col >
                                    <CardImg height="180px"  src="https://static.hopscotch.in/fstatic/product/202103/54158158-c867-46de-a7bb-6ce11ec8dd2a_full.jpg?version=1615825420740&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                        </Card>
                    </a>
                </Col>
      );
    };

export default ForeverFav;