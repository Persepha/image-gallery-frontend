import { RootState } from "../store";

export const selectAuthentecatedState = (state: RootState) =>
  state.authReducer.isAuthenticated;
