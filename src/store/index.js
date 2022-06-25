import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import cartReducer from "./reducer/cartReducer";

const store = configureStore({
  reducer: {
  // This is where we add reducers.
    cart: cartReducer,
  },
});

export default store;
