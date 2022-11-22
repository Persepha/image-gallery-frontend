import { createSlice } from "@reduxjs/toolkit";

import { login, logout, registration } from "./actionCreators";
import { getItem } from "../../utils/storage";
import { LoginState } from "./types";

const initialState: LoginState = {
  error: null,
  isLoading: false,
  token: getItem("authToken"),
  isAuthenticated: getItem("isAuthenticated") || false,
  username: getItem("username"),
  isStaff: getItem("isStaff") || false,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.token = action.payload.key;
      state.isAuthenticated = true;
      state.username = action.payload.profile.username;
      state.isStaff = action.payload.profile.is_staff;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload!;
      state.isAuthenticated = false;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isStaff = false;
      state.username = null;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload!;
    });

    builder.addCase(registration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.token = action.payload.key;
      state.isAuthenticated = true;
      state.username = action.payload.profile.username;
      state.isStaff = action.payload.profile.is_staff;
    });
    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload!;
      state.isAuthenticated = false;
    });
  },
});

export default slice.reducer;
