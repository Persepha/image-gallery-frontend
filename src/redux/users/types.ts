export interface Profile {
  username: string;
  avatar: string;
  date_joined: Date;
  is_staff: boolean;
}

export interface UserProfileState {
  isLoading: boolean;
  error: string;
  profile: Profile | null;
}

export interface UserProfileParams {
  slug: string;
}

export interface User extends Profile {
  id: number;
}

export interface UsersResponse<T> {
  limit: number;
  offset: number;
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface UsersState {
  isLoading: boolean;
  error: string;
  data: UsersResponse<User> | null;
}

export interface FilterUsersParams {
  limit: number;
  offset: number;
  searchValue: string;
}
