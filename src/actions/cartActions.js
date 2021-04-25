import {ADD_TO_CART, REMOVE_ITEM_FROM_CART, UPDATE_ITEM_CART} from './../constants/cart';
import ProductData from './../data/product.json';

export const addItemToCart = (id) => (dispatch) => {
  const product = ProductData.find(data => data.id === id);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      qty: 1
    }
  });
}

export const removeItem = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
  })
}

export const updateItem = (id, qty) => (dispatch) => {
  const product = ProductData.find(data => data.id === id);
  dispatch({
    type: UPDATE_ITEM_CART,
    payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      qty: qty
    }
  })
}