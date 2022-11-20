import { GalleryState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { gallery, newGalleryImage } from "./actionCreators";

const initialState: GalleryState = {
  error: "",
  isLoading: false,
  data: null,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gallery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(gallery.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(gallery.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message!;
    });

    builder.addCase(newGalleryImage.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(newGalleryImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(newGalleryImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message!;
    });
  },
});

export default gallerySlice.reducer;
