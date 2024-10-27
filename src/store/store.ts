import { configureStore } from "@reduxjs/toolkit";
import ProductsGridReducer from "./ProductsGridSlice";
import CartReducer from "./CartSlice";
import storage from "redux-persist/lib/storage"; // This imports the default localStorage

import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "cart",
  storage,
  blacklist: ['currentCartPage', 'paymentMethod'], // Do not persist these properties
};

const persistedReducer = persistReducer(persistConfig, CartReducer);

export const store = configureStore({
  reducer: {
    ProductsGrid: ProductsGridReducer,
    Cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore the persist actions
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
