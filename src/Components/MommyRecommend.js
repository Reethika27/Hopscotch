import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const MommyRecommend = (props) => {
    return (
       
            <Row>
                <Col sm="4">
                    <a href="#">
                        <Card body>
                            <CardImg  height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/1114262c-2634-4ec7-a30b-9e9f9ee01d91_full.jpg?version=1615899104201&tr=w-720,c-at_max,n-normal"></CardImg>
                          
                            </Card>
                    </a>
                </Col>
                <Col sm="4">
                    <br/>
                    <a href="#">
                        <Card body>
                            <CardImg  height="300px"  src="https://static.hopscotch.in/fstatic/product/202103/b295d5ac-1c57-441d-b214-ca04bbd6d0ac_full.gif?version=1615828151087&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Card>
                    </a>
                </Col>
                <Col sm="4">
                    <br/>
                    <a href="#">
                        <Card body>
                            <CardImg  height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/bea49f21-8230-4051-b101-7fc55c3f05cd_full.jpg?version=1615905428464&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Card>
                    </a>
                </Col>
                
            </Row>
      );
    };

export default MommyRecommend;