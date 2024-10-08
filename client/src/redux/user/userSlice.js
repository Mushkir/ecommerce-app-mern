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
  },
});

export const { UserLoggedIn } = userSlice.actions;

export default userSlice.reducer;
