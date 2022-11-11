import { ImageDetailState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { galleryImage } from "./actionCreators";

const initialState: ImageDetailState = {
  error: "",
  isLoading: false,
  imageDetail: null,
};

export const imageDetailSlice = createSlice({
  name: "imageDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(galleryImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.imageDetail = action.payload;
    });
    builder.addCase(galleryImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(galleryImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message!;
    });
  },
});

export default imageDetailSlice.reducer;
