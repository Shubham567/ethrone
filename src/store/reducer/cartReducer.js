import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartItemCount: {}
}

export const addItemToCart = createAction("cart/addItemToCart");

const cartReducer = createReducer(initialState, (builder) => {
    builder.addCase(addItemToCart, (state, action) => {
      const {cartItems} = state;
      const {item} = action.payload;
      const {id} = item;

      const prevCartItemCount = state.cartItemCount;

      return {
        cartItems: [...cartItems, item],
        cartItemCount: {
          ...prevCartItemCount,
          [id]: (prevCartItemCount[id] || 0) + 1
        }
      }

    })
  }
)

export default cartReducer;
