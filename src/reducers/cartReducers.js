import {ADD_TO_CART, CLEAR_ERRORS, REMOVE_ITEM_FROM_CART, UPDATE_ITEM_CART} from './../constants/cart';

export const cartReducers = (state={cart: []}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const isMatch = state.cart.find(data => data.id === action.payload.id);
      if (isMatch) {
        return {
          ...state,
          error: 'Product already in cart!'
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(data => data.id !== action.payload)
      }
    case UPDATE_ITEM_CART:
      return {
        ...state,
        cart: state.cart.map(data => data.id === action.payload.id ? action.payload : data)
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}