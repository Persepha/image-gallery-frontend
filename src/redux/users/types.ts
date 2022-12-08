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
