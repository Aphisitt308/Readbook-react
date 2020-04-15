import React from "react";
import { Container, Row } from "react-bootstrap";

import "./Landing.css";

const Landing = () => (
   <Container
      style={{ height: "75vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
   >
      {" "}
      <Row className="mb-4">
         <p className="text-secondary h1"> Read Note Application</p>
      </Row>
      <Row>
      </Row>
   </Container>
);

export default Landing;