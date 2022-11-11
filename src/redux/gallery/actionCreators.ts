import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FilterGalleryParams,
  GalleryImageParams,
  GalleryResponse,
  Image,
} from "./types";
import axios, { AxiosError } from "axios";
import { GALLERY_URL } from "../../consts/api/apiUrl";
import { ErrorResponse } from "../../consts/api/types";

export const gallery = createAsyncThunk<
  GalleryResponse<Image>,
  FilterGalleryParams,
  { rejectValue: ErrorResponse }
>("gallery/fetchAll", async (args, thunkAPI) => {
  try {
    const { data } = await axios.get<GalleryResponse<Image>>(GALLERY_URL, {
      params: {
        limit: args.limit,
        offset: args.offset,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "Gallery fetch error",
      extra: {},
    });
  }
});

export const galleryImage = createAsyncThunk<
  Image,
  GalleryImageParams,
  { rejectValue: ErrorResponse }
>("gallery/fetchGalleryImage", async (args, thunkAPI) => {
  try {
    const { data } = await axios.get<Image>(GALLERY_URL + args.slug);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "Gallery image fetch error",
      extra: {},
    });
  }
});
