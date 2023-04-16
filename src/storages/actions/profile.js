import axios from 'axios';
import {REACT_APP_BASE_URL} from '@env';
const url = REACT_APP_BASE_URL;

//screens myrecipes
export const getProfile = token => async dispatch => {
  try {
    let headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({type: 'GET_PROFILE_PENDING'});
    const result = await axios.get(url + `/users/my-users/`, headers);
    const myprofile = result.data.data;
    dispatch({type: 'GET_PROFILE_SUCCESS', payload: myprofile});
  } catch (err) {
    dispatch({type: 'GET_PROFILE_FAILED', payload: err.response.data.message});
    console.log('get profile error');
    console.log(err);
  }
};
//screens edit profile

