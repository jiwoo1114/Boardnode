import { configureStore } from '@reduxjs/toolkit'
import signupReducer from '../featurs/signupSlice'
import postReducer from '../featurs/postSlice'
import pageReducer from '../featurs/pageSlice'
import userReducer from '../featurs/userSlice'


const store = configureStore({
   reducer: {
      signup: signupReducer,
      posts: postReducer,
      page: pageReducer,
      user: userReducer,
   },
})

export default store