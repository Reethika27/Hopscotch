import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';
const Dummy = (props) => {
    return (
            
                <Col sm="4">
                    <a href="#">
                        <Card body>
                            <CardImg  height="300px"  src="https://static.hopscotch.in/fstatic/product/202103/17799cbc-a9f8-4539-a2a5-d0dbd8c1a4c8_full.gif?version=1615830918203&tr=w-720,c-at_max,n-normal"></CardImg>
                            <Row>
                                <Col>
                                    <CardImg height="80px"  src="https://static.hopscotch.in/fstatic/product/202103/fa6a8090-92d6-485d-837f-3b6b7d4c0c8c_full.gif?version=1615830938437&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col>
                                <   CardImg height="80px"  src="https://static.hopscotch.in/fstatic/product/202103/2e265216-d651-4290-8bde-594244489f2f_full.gif?version=1615830941903&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            </Card>
                    </a>
                </Col>
        
    );
};
export default Dummy;