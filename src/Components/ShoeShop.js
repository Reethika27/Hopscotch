import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';

const ShoeShop = (props) => {
    return (
       
        <Col sm="4">
        <a href="#">
                <Card body>
                    <Row noGutters={true}>
                    <Col >
                        <CardImg height="50px"  src="https://static.hopscotch.in/fstatic/product/202103/eefd2e06-0be5-488d-a284-03f1cfc1b108_full.jpg?version=1615826510045&tr=w-720,c-at_max,n-normal"></CardImg>
                    </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/ddc00060-bd9b-4f99-8489-36ec679043ec_full.jpg?version=1615826512321&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/3740b962-b1ef-4174-9865-b975b96a9c85_full.jpg?version=1615826514366&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col>
                            <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/5646c0be-dc2b-46fe-8855-7cfcac7cdf51_full.jpg?version=1615826516618&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/8dd9c121-67e4-4a2e-a555-464eb7139c28_full.jpg?version=1615826519503&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/e6706abb-977b-4205-9ccd-77eb11378ac4_full.jpg?version=1615826521811&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col>
                            <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/b2f226f1-e600-4fdf-9b25-e7eafa3988cf_full.jpg?version=1615826523430&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col>
                            <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/20da88aa-bd87-4300-8d09-630dcb4af9cb_full.jpg?version=1615826525986&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col >
                        <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/a341624d-1fe8-44d0-bf40-01d37cbb5e5e_full.jpg?version=1615826527916&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                        <Col>
                            <CardImg height="160px"  src="https://static.hopscotch.in/fstatic/product/202103/96665c1d-7464-4e25-8917-d41ba2efdc46_full.jpg?version=1615826530142&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Col>
                    </Row>
                    
                </Card>
        </a>
    </Col> 
  
            
      );
    };

export default ShoeShop;