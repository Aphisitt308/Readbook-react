import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../form/Input";
import {Link} from "react-router-dom"

const ProfileForm = ({ profile, onChange, onBlur, loading, onSubmit }) => {
   const { user_name, password, errors } = profile;
   return (
      <Container>
         <Row>
            <Col className="mx-auto">
               <Form noValidate onSubmit={onSubmit} className="p-sm-3 p-xs-1">
                  <Input
                     name="user_name"
                     type="text"
                     placeholder="Enter Post Title"
                     value={user_name}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "name",
                        label: "Name",
                        error: errors.user_name
                     }}
                  />
                  <Input
                     name="password"
                     type="text"
                     placeholder="Enter Post Title"
                     value={password}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "password",
                        label: "password",
                        error: errors.password
                     }}
                  />
                  
                  <Button
                     variant="outline-info"
                     type="submit"
                     disabled={loading}
                     className="mt-3"
                  >
                     Submit
                  </Button>
                  <Button  variant="outline-info"
                     type="cancel"
                     href to="/blog"
                     className="mt-3">
                        <Link to="/Profile">
                         cancel</Link>
                     </Button>
               </Form>
            </Col>
         </Row>
      </Container>
   );
};

ProfileForm.propTypes = {
   Profile: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   onBlur: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
};

export default ProfileForm;