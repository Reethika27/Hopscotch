import React from 'react';
import './Static/CSS/banner.css';
import {
    Card, Button, CardTitle, CardText, Row, Col,CardImg
} from 'reactstrap';

import Bycategory from './dummy';
const Coupon = (props) => {
    return (
       
        <Col sm="4">
        <a href="#">
            <Card body>
                <CardImg  height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/39fd0867-7918-45ce-83a4-fa53f6848e18_full.jpg?version=1615822342672&tr=w-720,c-at_max,n-normal"></CardImg>
            </Card>
        </a>    
    </Col>
      );
    };

export default Coupon;