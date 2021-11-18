import axios from 'axios';
import actiontypes from '../actiontypes';
import { getProducts } from './productsActions';

export const getProduct = (id) => {
  return dispatch => {
    dispatch(loading())
    axios.get(`https://localhost:44349/api/products/${id}`)
    .then(res => {
      dispatch(success(res.data))
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}

export const addProduct = (product) => {
  return dispatch => {
    dispatch(loading())
    axios.post('https://localhost:44349/api/products/', product)
    .then(res => {
      dispatch(success(res.data))
    })
    .then(() => {
      dispatch(getProducts())
    })
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}

export const clearProduct = () => {
  return{
    type: actiontypes().product.clear
  }
}
export const loading = () => {
  return {
    type: actiontypes().product.loading
  }
}

export const success = (product) => {
  return {
    type: actiontypes().product.success,
    payload: product
  }
}

export const failure = (error) => {
  return {
    type: actiontypes().product.failure,
    payload: error
  }
}