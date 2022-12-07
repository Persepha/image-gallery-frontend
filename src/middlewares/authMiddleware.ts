import { Middleware } from "@reduxjs/toolkit";

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.startsWith("auth/")) {
    const authState = store.getState().authReducer;

    const { token, isAuthenticated, username, isStaff, avatar } = authState;

    localStorage.setItem("authToken", JSON.stringify(token));
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("avatar", JSON.stringify(avatar));
    localStorage.setItem("isStaff", JSON.stringify(isStaff));
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }

  return result;
};
