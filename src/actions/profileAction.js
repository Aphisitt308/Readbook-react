import axios from "axios";
import {
   EDIT_PROFILE,
   TOGGLE_PROFILE_LOADING,
   GET_PROFILE
  
} from "./types";

import { setErrors } from "./errorActions";

// export const getProfile = ( userData, history) => {
   
//    axios.get(`/api/get/Profile`,{
//       headers: { Autherization: `Bearer ${localStorage.getItem('jwtToken')}`}
//    } )
//    .then( res => {
//       // const user_name = {
//       //    name: res.data.user_name.name,
//       //    password: res.data.user_name.password
//       // }
//       // localStorage.setItem("userpro", user_name);
//       console.log(res.data);
//    })
//    .catch( error  =>{
//       console.log(error);
//    })
//    history.push(`/Profile`);
// }

export const getProfileByID = id => dispatch => {
   dispatch(toggleProfileLoading());
   axios
      .get(`/api/get/Profile/${id}`)
      .then(res => {
         dispatch({
            type: GET_PROFILE,
            payload: res.data
         });
         dispatch(toggleProfileLoading());
      })
      .catch(err => {
         dispatch(setErrors(err.response.data));
         dispatch(toggleProfileLoading());
      });
};
export const updateProfile = (  userData ,history) => dispatch => {
   dispatch(toggleProfileLoading());
   
   axios
      .put(`/api/posts/editProfile/`, userData)
      .then(res => {
         dispatch({
            type: EDIT_PROFILE,
            payload: res.data
         });
         dispatch(toggleProfileLoading());
         history.push(`/Profile`);
         window.alert('Change profile complete!')
      })
      .catch(err => {
         dispatch(setErrors(err.response.data));
         dispatch(toggleProfileLoading());
      });
};


export const toggleProfileLoading = () => {
   return {
      type: TOGGLE_PROFILE_LOADING
   };
};

