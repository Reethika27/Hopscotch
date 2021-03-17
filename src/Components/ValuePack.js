import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';
import Bycategory from './dummy';
const ValuePack = (props) => {
    return (
       
        <Col sm="4">
        <a href="#" >
            <Card body>
                <CardImg height="40px"  src="https://static.hopscotch.in/fstatic/product/202103/83411ed8-c755-4a54-8403-f780d5ff714d_full.jpg?version=1615863749048&tr=w-720,c-at_max,n-normal"></CardImg>
                <CardImg height="40px"  src="https://static.hopscotch.in/fstatic/product/202103/1ac63def-9165-4958-b6b8-91999a76f42a_full.jpg?version=1615863751005&tr=w-720,c-at_max,n-normal"></CardImg>
            </Card>
        </a>
        <br/>
        <a href="#">
            <Card body>
                <Row>
                    <Col>
                        <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/0bfe5048-042b-4089-bc56-7ce869ba3177_full.jpg?version=1615829159131&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <CardImg height="175px"  src="https://static.hopscotch.in/fstatic/product/202103/5f1848c8-e681-4397-9055-3a249f9335c4_full.jpg?version=1615829197060&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    <Col >
                       <CardImg height="175px"  src="https://static.hopscotch.in/fstatic/product/202103/ae8ddbdf-4d3e-4fb3-976c-ba37d74a11e5_full.jpg?version=1615829199442&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    <Col>
                        <CardImg height="175px"  src="https://static.hopscotch.in/fstatic/product/202103/fba3038b-6967-4a07-b3e7-118f76067b93_full.jpg?version=1615829201294&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                </Row>
               
            </Card>
            
        </a>
    </Col>
            
      );
    };

export default ValuePack;