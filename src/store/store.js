import { configureStore } from '@reduxjs/toolkit'
import registrationReducer from './slice/registrationSlice';

export default configureStore({
    reducer: {
        registration: registrationReducer,
    }
})