import { configureStore } from '@reduxjs/toolkit'
import signupReducer from '../featurs/signupSlice'

const store = configureStore({
   reducer: {
      signup: signupReducer,
   },
})

export default store