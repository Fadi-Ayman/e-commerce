import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductsGrid {
  sm: 1 | 2;
  lg: 3 | 4 | 5;
  MaxProductsNumber: number;
}

const initialState: ProductsGrid = {
  sm: 1,
  lg: 5,
  MaxProductsNumber: 20,
};

export const ProductsGridSlice = createSlice({
  name: "productsGrid",
  initialState,
  reducers: {
    handleSmGird: (state, action: PayloadAction<1 | 2>) => {
      state.MaxProductsNumber = 20;
      state.sm = action.payload;
    },

    handleLgGrid: (state, action: PayloadAction<3 | 4 | 5>) => {
      if (action.payload === 3) {
        state.MaxProductsNumber = 21;
        state.lg = action.payload;
      } else {
        state.lg = action.payload;
        state.MaxProductsNumber = 20;
      }
    },
  },
});

export const { handleSmGird, handleLgGrid } = ProductsGridSlice.actions;

export default ProductsGridSlice.reducer;
