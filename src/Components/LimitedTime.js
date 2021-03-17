import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';
import { MDBView } from "mdbreact";
const LimitedTime = (props) => {
    return (
      
        <Col sm="4">
            <br/>
        <a href="#">
            <Card body>
                <CardImg  height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/ddf99640-13e6-4d0b-b6ca-c867d0ecadc3_full.jpg?version=1615871747998&tr=w-720,c-at_max,n-normal"></CardImg>
            </Card>
        </a>  
        <br/>
        <a href="#">
                <Card body>
                <Row noGutters={true}>
                    <Col >
                        <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/5c5a9cde-5037-4c96-b4a4-84978c1e3d1c_full.jpg?version=1615833677223&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    </Row>
                <Row noGutters={true}>
                        <Col>
                            <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/9ab1fca0-6ccb-4e48-9a86-8b89086b0d4b_full.gif?version=1615833681159&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/2f8409df-7c46-44ff-97fc-ec809833479a_full.gif?version=1615833683418&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/d22e1166-9620-4289-a630-3542402c5e86_full.gif?version=1615833686033&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/6e17a16c-0aa2-4fdb-9f9b-17a9cd7cd1d4_full.gif?version=1615833687554&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                </Card>
        </a> 
       </Col>
    
      );
    };

export default LimitedTime;