import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  user: {name: 'fahad'},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      //   state.value.user=action.payload;
    },
  },
})

export const {authenticate} = authSlice.actions

export default authSlice.reducer
