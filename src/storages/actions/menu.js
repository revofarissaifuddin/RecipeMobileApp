import axios, {useState, useEffect} from 'axios';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {REACT_APP_BASE_URL} from '@env';
const url = REACT_APP_BASE_URL;

//screens home/router
export const newMenu = () => async dispatch => {
  try {
    dispatch({type: 'GET_MENU_PENDING'});
    const result = await axios.get(
      url + `/recipes/all-recipe?sort=DESC&limit=5`,
    );
    const menu = result.data.data;
    dispatch({type: 'GET_MENU_SUCCESS', payload: menu});
  } catch (err) {
    dispatch({type: 'GET_MENU_FAILED', payload: err.response.data.message});
    console.log('getMenu error');
    console.log(err);
  }
};

//screens myrecipes
export const getMenu = (token) => async dispatch => {
  try {
      let headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({type: 'GET_MENU_PENDING'});
    const result = await axios.get(url + `/recipes/my-recipe`, headers);
    const menu = result.data.data;
    dispatch({type: 'GET_MENU_SUCCESS', payload: menu});
  } catch (err) {
    dispatch({type: 'GET_MENU_FAILED', payload: err.response.data.message});
    console.log('getMenu error');
    console.log(err);
  }
};

//screens detail recipe
export const detailMenu = (id) => async dispatch => {
  try {
    dispatch({type: 'GET_DETAIL_MENU_PENDING'});
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recipes/my-recipe/${id}`,
    );
    const detail = result.data.data;
    dispatch({type: 'GET_DETAIL_MENU_SUCCESS', payload: detail});
  } catch (error) {
    dispatch({
      type: 'GET_DETAIL_MENU_FAILED',
      payload: error.response.data.message,
    });
    console.log('getMenu error');
    console.log(error);
  }
};

//screen search menu
export const searchMenu = (data) => async dispatch => {
  try {
    dispatch({type: 'GET_MENU_PENDING'});
    const result = await axios.get(
      url + `/recipes/all-recipe?search=${data}`,
    );
    const menu = result.data.data;
    dispatch({type: 'GET_MENU_SUCCESS', payload: menu});
  } catch (err) {
    dispatch({type: 'GET_MENU_FAILED', payload: err.response.data.message});
    console.log('getMenu error');
    console.log(err);
  }
};

//delete menu recipes
export const deleteMenu = (id,token) => async dispatch => {
  try {
    let headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({type: 'DELETE_MENU_PENDING'});
    const result = axios.delete(url + `/recipes/my-recipe/${id}`, headers);
    const menu = result.data;
    dispatch({type: 'DELETE_MENU_SUCCESS', payload: menu});
  } catch (error) {
    dispatch({
      type: 'DELETE_MENU_FAILED',
      payload: error.response.data.message,
    });
    console.log('DELETEMenu error');
    console.log(error);
  }
};