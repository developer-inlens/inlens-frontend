import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import albumReducer from './slices/albumSlice'

export const store = configureStore({
  reducer: {
    authenticate: authReducer,
    album: albumReducer,
  },
})
