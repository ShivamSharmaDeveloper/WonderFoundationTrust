import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    registration: null,
}
export const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        resetRegistrationSlice: () => initialState,
        doRegistration: (state, action) => {
            state.registration = action.payload;
        },
        doReset: (state) => {
            state.registration = null;
        },
    },
})

export const { doRegistration, doReset } = registrationSlice.actions;

export default registrationSlice.reducer;