import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../Types/Types";
import { PaymentMethods } from "../Types/ApiTypes";

type CartInitialValue = {
  currentCartPage: 0 | 1 | 2;
  paymentMethod: PaymentMethods;
  cartList: CartItemType[];
};

const initialState: CartInitialValue = {
  currentCartPage: 0,
  paymentMethod: "pay-on-delivery",
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      state.cartList.push(action.payload);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
    },

    setQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const item = state.cartList.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        item.subTotal = quantity * item.price;
      }
    },

    setPaymentMethod: (state, action: PayloadAction<PaymentMethods>) => {
      state.paymentMethod = action.payload;
    },

    setCurrentCartPage: (state, action: PayloadAction<0 | 1 | 2>) => {
      state.currentCartPage = action.payload;
    },

    resetCartData: (state) => {
      state.cartList = initialState.cartList;
      state.currentCartPage = initialState.currentCartPage;
      state.paymentMethod = initialState.paymentMethod;
    },
  },
});

export const {
  addToCart,
  setQuantity,
  removeFromCart,
  setPaymentMethod,
  setCurrentCartPage,
  resetCartData,
} = cartSlice.actions;

export default cartSlice.reducer;
