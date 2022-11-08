import { createAsyncThunk } from "@reduxjs/toolkit";
import { GalleryResponse, Image } from "./types";
import axios, { AxiosError } from "axios";
import { GALLERY_URL } from "../../consts/api/apiUrl";
import { ErrorResponse } from "../../consts/api/types";

export const gallery = createAsyncThunk<
  GalleryResponse<Image>,
  void,
  { rejectValue: ErrorResponse }
>("gallery/fetchAll", async (args, thunkAPI) => {
  try {
    const { data } = await axios.get<GalleryResponse<Image>>(GALLERY_URL);
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
