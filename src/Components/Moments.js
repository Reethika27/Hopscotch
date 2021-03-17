import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';

const Moments = (props) => {
    return (
       
        <Col sm="4">
        <a href="#">
                <Card body>
                    <Row noGutters={true}>
                    <Col >
                        <CardImg height="40px"  src="https://static.hopscotch.in/fstatic/product/202103/001297e5-7f07-4de0-ac75-4810e5304d03_full.jpg?version=1615823426611&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/c7f585b6-842d-4fea-bcee-18cbdc90707f_full.jpg?version=1615823430197&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/30bea7a0-712c-4c49-b540-b70c6b60d446_full.jpg?version=1615823438729&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/a0a452c2-4a27-4b4b-bbf8-8292bd06b16b_full.jpg?version=1615823439180&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/7b8c6d40-2ced-4188-8c3f-1b3de7f82a40_full.jpg?version=1615828979686&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        
                    </Row>
                   
                    <Row noGutters={true}>
                    <Col >
                        <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/1be69907-9e00-4d4e-a49a-92ee3c3b7272_full.jpg?version=1615823439131&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    </Row>
                
                </Card>
        </a>
    </Col> 
  
            
      );
    };

export default Moments;