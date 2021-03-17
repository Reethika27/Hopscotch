import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';
import Bycategory from './dummy';
const PartyShop = (props) => {
    return (
       
                <Col sm="4">
                    <a href="#">
                        <br/><br/><br/>
                        <Card body>
                            <Row noGutters={true}>
                                 <CardImg  height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/6f41ab67-8060-46a3-98bb-6f1b21de81af_full.jpg?version=1615827180078&tr=w-720,c-at_max,n-normal"></CardImg>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="60px"  src="https://static.hopscotch.in/fstatic/product/202103/0cdfc59e-4b50-4fd2-a5cd-88dfc7e18b4e_full.jpg?version=1615827181441&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col>
                                <   CardImg height="60px"  src="https://static.hopscotch.in/fstatic/product/202103/b1353c11-c3b7-48aa-bf29-1897682beeea_full.jpg?version=1615827183572&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            <Row noGutters={true}>
                                 <CardImg  height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/62ad384e-88e3-4b76-a7a1-69f800fd5c28_full.jpg?version=1615827186331&tr=w-720,c-at_max,n-normal"></CardImg>
                            </Row>
                            <Row noGutters={true}>
                                <Col>
                                    <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/262c9258-7ae0-4d38-ab0e-b460a68c7c38_full.jpg?version=1615827193838&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                                <Col>
                                <   CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/0f1dec48-98af-4a38-bced-0338a6bedf89_full.jpg?version=1615827195219&tr=w-720,c-at_max,n-normal"></CardImg>
                                </Col>
                            </Row>
                            </Card>
                    </a>
    
                </Col>
            
      );
    };

export default PartyShop;