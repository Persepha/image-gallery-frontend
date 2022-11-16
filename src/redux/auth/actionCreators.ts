import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ErrorResponse } from "../../consts/api/types";
import { LoginParams, LoginResponse, RegistrationParams } from "./types";
import { LOGIN_URL, LOGOUT_URL, SIGNUP_URL } from "../../consts/api/apiUrl";

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

export const registration = createAsyncThunk<
  LoginResponse,
  RegistrationParams,
  { rejectValue: ErrorResponse }
>("auth/registration", async (args, thunkAPI) => {
  const { username, password1, password2, email } = args;
  try {
    const { data } = await axios.post<LoginResponse>(SIGNUP_URL, {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response && error.response.data;
      return thunkAPI.rejectWithValue(message);
    }

    return thunkAPI.rejectWithValue({
      message: "Auth registration error",
      extra: {},
    });
  }
});
