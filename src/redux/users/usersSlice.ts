import { UsersState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { users } from "./actionCreators";

const initialState: UsersState = {
  error: "",
  isLoading: false,
  data: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(users.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(users.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(users.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message!;
    });
  },
});

export default usersSlice.reducer;
