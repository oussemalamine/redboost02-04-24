import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./features/login/loginSlice";
import registerSliceReducer from "./features/register/registerSlice";

export const store = configureStore({
  reducer: {
    loginSlice: loginSliceReducer,
    registerSlice: registerSliceReducer,
  },
});