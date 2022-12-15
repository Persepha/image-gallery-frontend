import { UserProfileState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import {
  personalUserProfile,
  updateUserProfile,
  userProfile,
} from "./actionCreators";

const initialState: UserProfileState = {
  error: "",
  isLoading: false,
  profile: null,
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(personalUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.profile = action.payload;
    });
    builder.addCase(personalUserProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(personalUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.profile = null;
      state.error = action.payload?.message!;
    });

    builder.addCase(userProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.profile = action.payload;
    });
    builder.addCase(userProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.profile = null;
      state.error = action.payload?.message!;
    });

    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.profile = action.payload;
    });
    builder.addCase(updateUserProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.profile = null;
      state.error = action.payload?.message!;
    });
  },
});

export default userProfileSlice.reducer;
