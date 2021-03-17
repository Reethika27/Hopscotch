import React from 'react';
import './Static/CSS/banner.css';
import { MDBView } from "mdbreact";
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';
import Bycategory from './dummy';
const MiniLook = (props) => {
    return (
                <Col sm="4">
                    <a href="#">
                   
                        <Card body>
                            <Row noGutters={true}>
                                 <CardImg  height="300px"  src="https://static.hopscotch.in/fstatic/product/202103/032c9024-ffc5-4c5e-8860-4d5ca35c7ec1_full.gif?version=1615832965124&tr=w-720,c-at_max,n-normal"></CardImg>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="80px"  src="https://static.hopscotch.in/fstatic/product/202103/a0b9651f-5741-4115-8687-bef0859bde18_full.jpg?version=1615832970963&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col>
                                <   CardImg height="80px"  src="https://static.hopscotch.in/fstatic/product/202103/872ae115-509b-4a45-a8d9-8b9da2cc8db3_full.jpg?version=1615832974422&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            </Card>
                            
                    </a>
                </Col>
            
      );
    };

export default MiniLook;