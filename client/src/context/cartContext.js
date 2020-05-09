import React, { createContext, useReducer } from 'react';
import cartReducer, { SET_PRODUCT } from './cartReducer';

const initialState = {
  cart: [],
  cartSize: 0,
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Actions
  function setProduct(product) {
    dispatch({ type: SET_PRODUCT, payload: product });
  }

  return (
    <CartContext.Provider
      value={{ cart: state.cart, cartSize: state.cartSize, setProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};