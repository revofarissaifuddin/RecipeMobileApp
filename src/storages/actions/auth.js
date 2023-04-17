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
    const user_regris = result.data.data;
    dispatch({type: 'USER_REGISTER_SUCCESS', payload: user_regris});
  } catch (err) {
    dispatch({
      type: `USER_REGISTER_FAILED`,
      payload: err.respons.data.message,
    });
    console.log('loginUser error');
    console.log(err);
  }
};

export const forgotPassword = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'FORGOT_PASSWORD_PENDING' });
    const result = await axios.put(url + `/users/send-otp`, data);
    const ForgotPwd = result.data.data;
    dispatch({ type: 'FORGOT_PASSWORD_SUCCESS', payload: ForgotPwd });
  } catch (err) {
    dispatch({
      type: `FORGOT_PASSWORD_FAILED`,
      payload: err.respons.data.message,
    });
    console.log('loginUser error');
    console.log(err);
  }
};

export const confirmOtp = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'CONF_OTP_PENDING'});
    const result = await axios.get(url + `/users/otp/confirm`, data);
    const ConfirmOtp = result.data.data;
    dispatch({type: 'CONF_OTP_SUCCESS', payload: ConfirmOtp});
  } catch (err) {
    dispatch({
      type: `CONF_OTP_FAILED`,
      payload: err.respons.data.message,
    });
    console.log('Confirm error');
    console.log(err);
  }
};

export const resetPassword = data => async (dispatch, getState) => {
  try {
    dispatch({type: 'RESET_PASSWORD_PENDING'});
    const result = await axios.put(url + `/users/reset`, data);
    const user_resetPwd = result.data.data;
    dispatch({type: 'RESET_PASSWORD_SUCCESS', payload: user_resetPwd});
  } catch (err) {
    dispatch({
      type: `RESET_PASSWORD_FAILED`,
      payload: err.respons.data.message,
    });
    console.log('error');
    console.log(err);
  }
};
