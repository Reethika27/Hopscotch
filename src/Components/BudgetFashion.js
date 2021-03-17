import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';
import Bycategory from './dummy';
const BudgetFashion = (props) => {
    return (
       
        <Col sm="4" noGutters={true} >
            <br></br>
        <a href="#">
                <Card body>
                    <Row>
                    <Col >
                        <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/08e44037-bd5d-4eb6-bdd7-14e44117d966_full.jpg?version=1615829548382&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/5b22fc98-8cfa-4fd2-bdac-f21342dad56a_full.jpg?version=1615829550815&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/8cc1e674-21e2-4567-9ca0-0b05f52fcc26_full.jpg?version=1615829552454&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col>
                            <CardImg height="150px"  src="https://static.hopscotch.in/fstatic/product/202103/4a124d97-9c40-496a-aeda-ea871e0bf892_full.jpg?version=1615829554090&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>    
                </Card>
            </a>
            <br/>
            <a href="#">
                <Card body>
                <Row noGutters={true}>
                    <Col >
                        <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/96a9dfb0-8e5d-4b62-89d9-3f65de02c8c8_full.jpg?version=1615874266269&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    </Row>
                <Row noGutters={true}>
                        <Col>
                            <CardImg height="190px"  src="https://static.hopscotch.in/fstatic/product/202103/b1b383a0-92e0-4d9c-a4ef-e0a7f6d61c68_full.jpg?version=1615874270616&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="190px"  src="https://static.hopscotch.in/fstatic/product/202103/b8fa8cbb-2db9-4b5c-8c99-b5723189754b_full.jpg?version=1615874273183&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col>
                            <CardImg height="190px"  src="https://static.hopscotch.in/fstatic/product/202103/64bfa0b7-63b8-45a9-b588-339aac53dfab_full.jpg?version=1615874275036&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <CardImg height="190px"  src="https://static.hopscotch.in/fstatic/product/202103/b7652a95-6509-4576-b40d-9b814c8c7a51_full.jpg?version=1615874279583&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="190px"  src="https://static.hopscotch.in/fstatic/product/202103/c6b6b8fb-ac20-4f9a-a5ea-cb6da6d45118_full.jpg?version=1615874281804&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col>
                            <CardImg height="190px"  src="https://static.hopscotch.in/fstatic/product/202103/fd94e57d-f1d2-495f-ae24-1714af7975e1_full.jpg?version=1615874283292&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                </Card>
        </a>
    </Col> 
  
            
      );
    };

export default BudgetFashion;