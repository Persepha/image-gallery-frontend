import axios from "../../axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FilterUsersParams,
  Profile,
  UpdateProfileParams,
  User,
  UserProfileParams,
  UsersResponse,
} from "./types";
import { ErrorResponse } from "../../consts/api/types";
import { PERSONAL_PROFILE_URL, USERS_URL } from "../../consts/api/apiUrl";
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

export const userProfile = createAsyncThunk<
  Profile,
  UserProfileParams,
  { rejectValue: ErrorResponse }
>("users/fetchUserProfile", async (args, thunkAPI) => {
  try {
    const { data } = await axios.get<Profile>(USERS_URL + args.slug);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "User profile fetch error",
      extra: {},
    });
  }
});

export const updateUserProfile = createAsyncThunk<
  Profile,
  UpdateProfileParams,
  { rejectValue: ErrorResponse }
>("users/updateUserProfile", async (args, thunkAPI) => {
  try {
    const { data } = await axios.patch<Profile>(PERSONAL_PROFILE_URL, args);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "User profile update error",
      extra: {},
    });
  }
});

export const users = createAsyncThunk<
  UsersResponse<User>,
  FilterUsersParams,
  { rejectValue: ErrorResponse }
>("users/fetchAll", async (args, thunkAPI) => {
  try {
    const { data } = await axios.get<UsersResponse<User>>(USERS_URL, {
      params: {
        limit: args.limit,
        offset: args.offset,
        username: args.searchValue,
      },
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "Users fetch error",
      extra: {},
    });
  }
});
