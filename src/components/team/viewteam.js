import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";
import {Link} from "react-router-dom";

const ViewTeam  = () => { 
   
    return (
      <Container className="mt-4 viewPost">
         <Row>
            <Col className="text-center postTitle">
               <h2>Our Team</h2>
            </Col>
         </Row>
         <Row className="text-center postTitle" style={{ whiteSpace: "pre-wrap" }}>
         <figure className="image is-60x85">  
         <img src={process.env.PUBLIC_URL+'/617.jpg'} alt="." />
          </figure>  
            <Col>ศุภกิตต์ สมวานิช</Col>
            <Col> 610610617 </Col>
            <Col>Email : taatpang0508@gmail.com</Col>
            <Col>Facebook : Spkswn Supakit</Col>
            <Col>Computer Engineering CMU</Col>
         </Row>
         <Row className="text-center postTitle" style={{ whiteSpace: "pre-wrap" }}>
         <figure className="image is-60x60">
         <img src={process.env.PUBLIC_URL+'/623.jpg'} alt="." />
         </figure>   
            <Col>
            
            อภิสิทธิ์  นันทวิชัย</Col>
            <Col> 610610623 </Col>
            <Col>Email : Bam52170@gmail.com</Col>
            <Col>Facebook : Apisit  Nantavichai</Col>
            <Col>Computer Engineering CMU</Col>
         </Row>
            <Row className="mt-4">
               <Col className="text-center">
                  <Button
                     className="mr-2"
                     variant="outline-info"
                     
                  >
                     <Link to="/">
                     Go Back
                     </Link>
                  </Button>
               </Col>
            </Row>
      </Container>
   );
};


export default ViewTeam;