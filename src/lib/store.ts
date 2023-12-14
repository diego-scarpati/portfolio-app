import { configureStore } from "@reduxjs/toolkit";
import sectionSlice from "./features/section";

export const makeStore = () => {
  return configureStore({
    reducer: {
      section: sectionSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
