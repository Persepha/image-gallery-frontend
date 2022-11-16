import { LoginState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./actionCreators";
import { getItem } from "../../utils/storage";

const initialState: LoginState = {
  error: null,
  isLoading: false,
  token: getItem("authToken"),
  isAuthenticated: getItem("isAuthenticated") || false,
  username: null,
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
      state.username = null;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload!;
    });
  },
});

export default slice.reducer;
