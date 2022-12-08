import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile } from "./types";
import { ErrorResponse } from "../../consts/api/types";
import { PERSONAL_PROFILE_URL } from "../../consts/api/apiUrl";
import { AxiosError } from "axios";

export const personalUserProfile = createAsyncThunk<
  Profile,
  void,
  { rejectValue: ErrorResponse }
>("users/fetchPersonalProfile", async (args, thunkAPI) => {
  try {
    const { data } = await axios.get<Profile>(PERSONAL_PROFILE_URL);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "Personal user profile fetch error",
      extra: {},
    });
  }
});
