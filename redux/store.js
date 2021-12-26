// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers";

// export const store = createStore(reducers, {}, applyMiddleware(thunk));


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    authenticate: authReducer,
  },
});

