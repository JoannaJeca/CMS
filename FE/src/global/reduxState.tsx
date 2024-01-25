import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ID: "" || null,
};

const reduxState = createSlice({
  name: "BLOGS",
  initialState,
  reducers: {
    loginState: (state: any, { payload }) => {
      state.ID = payload;
    },
    logoutState: (state: any) => {
      state.ID = null;
    },
  },
});

export const { loginState, logoutState } = reduxState.actions;

export default reduxState.reducer;
