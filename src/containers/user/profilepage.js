import React, { useEffect } from "react";
import Profile from "../../components/user/profile";
import {getProfileByID} from "../../actions/profileAction"
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProfilePage = ({
   auth,
   profile,
   match,
   history,
   getProfileByID

}) => {
   useEffect(() => {
      getProfileByID(match.params.id);
   }, [match, getProfileByID]);

   const handleEdit = () => {
      history.push(`/blog/put/editProfile/`);
   };

   if (Object.keys(profile).length === 0) return <div />;
   return (
      <Profile
         profile={profile}
         auth={auth}
         onEdit={handleEdit}
      />
   );
};

const mapStateToProps = state => ({
   auth: state.auth.isAuthenticated,
   profile: state.profile.profile
});

ProfilePage.propTypes = {
   auth: PropTypes.bool.isRequired,
   profile: PropTypes.object.isRequired,
   getProfileByID: PropTypes.func.isRequired,
};

export default connect(
   mapStateToProps,{
      getProfileByID
   }
)(ProfilePage);