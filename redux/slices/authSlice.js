import { createSlice, } from "@reduxjs/toolkit";


const initialState = {
  user: {name:"fahad"},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
    //   state.value.user=action.payload;
    console.log("@@@","yethy")
  },}
});

export const { authenticate} = authSlice.actions;

export default authSlice.reducer;
