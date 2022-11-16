import { ErrorResponse } from "../../consts/api/types";

export interface Profile {
  id: number;
  username: string;
}

export interface LoginResponse {
  key: string;
  profile: Profile;
}

export interface LoginState {
  isLoading: boolean;
  error: null | ErrorResponse;
  username: null | string;
  token: null | string;
  isAuthenticated: boolean;
}

export interface LoginParams {
  username: string;
  password: string;
}
