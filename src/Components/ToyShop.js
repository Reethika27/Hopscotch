import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const ToyShop = (props) => {
    return (
       
            <>
                <Col sm="4">
                    <br></br>
                    <a href="#">
                        <Card body>
                            <CardImg  height="380px"  src="https://static.hopscotch.in/fstatic/product/202103/59727094-99f9-41b5-a009-773ee5d0e844_full.jpg?version=1615824157726&tr=w-720,c-at_max,n-normal"></CardImg>
                          
                            </Card>
                    </a>
                </Col>
            </>
           
      );
    };

export default ToyShop;