import axios from 'axios';
import {REACT_APP_BASE_URL} from '@env'
const url = REACT_APP_BASE_URL;

export const login = (data) => async (dispatch, getState) => {
  try {
    dispatch({type: 'LOGIN_REQUEST'});
    const result = await axios.post(url + '/auth/login', data);
    console.log(result);
    result.data.data && dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
  } catch (err) {
    console.log(err);
    dispatch({type: 'LOGIN_ERROR'});
  }
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({type: 'DELETE_STORE_TOKEN'});
  };
};

export const regUser = (data) => async (dispatch, getState) => {
  try {
    dispatch({type: 'USER_REGISTER_PENDING'});
    const result = await axios.post(url + `/auth/register`, data);
    const user = result.data.data;
    dispatch({type: 'USER_REGISTER_SUCCESS', payload: user});
  } catch (err) {
    dispatch({
      type: `USER_REGISTER_FAILED`,
      payload: err.respons.data.message,
    });
    console.log('loginUser error');
    console.log(err);
  }
};
