import React from 'react';
import './Static/CSS/banner.css';
import {
    Card,Row, Col,CardImg
} from 'reactstrap';

const LookCool = (props) => {
    return (
       
            <>
             
                <Col sm="4">
                   <br/>
                    <a href="#">
                        <Card body>
                            <CardImg  height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/b592c464-78c6-4791-9477-065722969f8d_full.jpg?version=1615825665292&tr=w-720,c-at_max,n-normal"></CardImg>
                          
                            </Card>
                    </a>
                </Col>
                <Col sm="4">
                   
                    <a href="#">
                        <Card body>
                            <CardImg  height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/b8be5f1e-17a5-4cb5-9a14-4263e8870bc3_full.jpg?version=1615825671725&tr=w-720,c-at_max,n-normal"></CardImg>
                          
                            </Card>
                    </a>
                </Col>

                <Col sm="4">
                   
                    <a href="#">
                        <Card body>
                            <CardImg  height="250px"  src="https://static.hopscotch.in/fstatic/product/202103/5bea40bb-aa67-45c6-a899-323a9747f962_full.jpg?version=1615825656726&tr=w-720,c-at_max,n-normal"></CardImg>
                        </Card>
                    </a>
                </Col>
                </>
           
      );
    };

export default LookCool;