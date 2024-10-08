import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UserLoggedIn: (state, action) => {
      state.currentUser = action.payload;
    },
    UserLogout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { UserLoggedIn, UserLogout } = userSlice.actions;

export default userSlice.reducer;
