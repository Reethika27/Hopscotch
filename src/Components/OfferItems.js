import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const OfferItems = (props) => {
    return (
       
            <>
                <Col sm="4">
                    <br></br>
                    <a href="#">
                        <Card body>
                            <CardImg  height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/45a24724-c8d2-4870-ae3a-215d49060688_full.jpg?version=1615905548475&tr=w-720,c-at_max,n-normal"></CardImg>
                          
                            </Card>
                    </a>
                </Col>
                

                <Col sm="4">
                    <br/>
                    <a href="#">
                        <Card body>
                            <CardImg  height="200px"  src="https://static.hopscotch.in/fstatic/product/202103/c8b33360-1532-4678-9e9f-698d46850fee_full.jpg?version=1615905498787&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Card>
                    </a>
                </Col>
                </>
           
      );
    };

export default OfferItems;