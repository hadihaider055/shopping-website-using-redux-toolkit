import { configureStore } from "@reduxjs/toolkit";
import controllerReducer from "../Global Controller";

export default configureStore({
  reducer: {
    baskets: controllerReducer,
  },
});
