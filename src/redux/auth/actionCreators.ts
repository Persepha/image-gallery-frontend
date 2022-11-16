import { LoginParams, LoginResponse } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorResponse } from "../../consts/api/types";
import axios, { AxiosError } from "axios";
import { LOGIN_URL, LOGOUT_URL } from "../../consts/api/apiUrl";

export const login = createAsyncThunk<
  LoginResponse,
  LoginParams,
  { rejectValue: ErrorResponse }
>("auth/login", async (args, thunkAPI) => {
  const { username, password } = args;
  try {
    const { data } = await axios.post<LoginResponse>(LOGIN_URL, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "Auth login error",
      extra: {},
    });
  }
});

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: ErrorResponse }
>("auth/logout", async (args, thunkAPI) => {
  try {
    const { data } = await axios.post(LOGOUT_URL);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "Auth logout error",
      extra: {},
    });
  }
});
