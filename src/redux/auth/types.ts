import { ErrorResponse } from "../../consts/api/types";

export interface Profile {
  id: number;
  username: string;
  is_staff: boolean;
  avatar: string;
}

export interface LoginResponse {
  key: string;
  profile: Profile;
}

export interface LoginState {
  isLoading: boolean;
  error: null | ErrorResponse;
  username: null | string;
  avatar: null | string;
  token: null | string;
  isAuthenticated: boolean;
  isStaff: boolean;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface RegistrationParams {
  username: string;
  password1: string;
  password2: string;
  email: string;
}

export interface NewImageParams {
  name: string;
  url: string;
  slug?: string;
  tags?: string;
}

export interface UpdateImageParams {
  name: string;
  url: string;
  slug?: string;
  tags?: string;
  oldSlug: string;
}
