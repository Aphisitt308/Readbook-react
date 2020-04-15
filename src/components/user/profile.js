import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./post.scss";
import {Link} from "react-router-dom";

const Profile = ({ profile, auth, onEdit }) => {
   return (
      <Container className="mt-4 viewPost">
         <Row>
            <Col className="text-center postTitle">
               <h2>User</h2>
            </Col>
         </Row>
         <Row className="my-4" style={{ whiteSpace: "pre-wrap" }}>
   {/* <Col>{profile.body}</Col> */} 
   

         </Row>
         {auth && (
            <Row className="mt-4">
               <Col className="text-center">
                  <Button
                     className="mr-2"
                     variant="outline-info"
                     onClick={onEdit}
                  >
                  <Link to= "/editProfile">
                     Edit
                  </Link>
                  </Button>
               </Col>
            </Row>
         )}
         <Row className="mt-4">
         <Col className="text-center">
            <Button
                     className="mr-2"
                     variant="outline-info"
                  >
                     <Link to= "/blog/post">
                     Go Back
                     </Link>
                  </Button>
            </Col>
         </Row>
      </Container>
   );
};

Profile.propTypes = {
   profile: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
};


export default Profile;
