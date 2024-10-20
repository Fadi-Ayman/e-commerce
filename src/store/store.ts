import { configureStore } from "@reduxjs/toolkit";
import ProductsGridReducer from "./ProductsGridSlice";

export const store = configureStore({
  reducer: {
    ProductsGrid: ProductsGridReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
