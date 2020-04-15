import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProfileForm from "../../components/user/profileform";
import Validate from "../../components/form/Validate";
import { connect } from "react-redux";
// import { getPostByID, updatePost } from "../../actions/postActions";
import {updateProfile,getProfileByID} from "../../actions/profileAction"

const UpdateProfilePage = ({
   errors,
   updateProfile,
   loading,
   currentProfile,
   getProfileByID,
   match,
   history
}) => {
   const [Profile, setProfile] = useState({
      name: "",
      password: "",
      errors: {}
   });

   // updating the local state of post with the received post data
   useEffect(() =>{
      getProfileByID(match.params.id);

   },[match, getProfileByID]);

   useEffect(() => {
      setProfile(Profile => ({
         name: currentProfile.name,
         password: currentProfile.password,
         errors: { ...Profile.errors }
      }));
   }, [currentProfile]);
   useEffect(() => {
      setProfile(Profile => {
         return { ...Profile, errors };
      });
   }, [errors]);
   const handleChange = e => {
      setProfile({
         ...Profile,
         [e.target.name]: e.target.value,
         [e.target.password]: e.target.value
      });
   };

   const handleBlur = e => {
      const { name, value } = e.target;
      const error = { ...Profile.errors, ...Validate(name, value).errors };
      setProfile({ ...Profile, errors: { ...error } });
   };

   const handleSubmit = e => {
      e.preventDefault();
      const { name, password } = Profile;
      updateProfile(currentProfile.auth, { name, password }, history);
   };

   // to ensure that the post is loaded otherwise we would make uncontrolled form access error
   const isProfileLoaded = () => {
      return Profile.name || Profile.password || Object.keys(Profile.errors).length > 0;
   };

   return isProfileLoaded() ? (
      <ProfileForm
         loading={loading}
         Profile={Profile}
         onChange={handleChange}
         onBlur={handleBlur}
         onSubmit={handleSubmit}
      />
   ) : (
      <div />
   );
};

const mapStateToProps = state => ({
   currentProfile: state.Profile.Profile,
   loading: state.Profile.postLoading,
   errors: state.errors
});

UpdateProfilePage.propTypes = {
   currentProfile: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   errors: PropTypes.object.isRequired,
   updateProfile: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getProfileByID, updateProfile }
)(UpdateProfilePage);