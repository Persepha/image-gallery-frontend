import { GalleryState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import {
  deleteGalleryImage,
  gallery,
  newGalleryImage,
  updateGalleryImage,
} from "./actionCreators";

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

    builder.addCase(deleteGalleryImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      if (state.data) {
        state.data.results = state.data.results.filter(
          (image) => image.slug !== action.payload
        );
      }
    });
    builder.addCase(deleteGalleryImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteGalleryImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message!;
    });

    builder.addCase(updateGalleryImage.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(updateGalleryImage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateGalleryImage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message!;
    });
  },
});

export default gallerySlice.reducer;
