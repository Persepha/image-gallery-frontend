import { Middleware } from "@reduxjs/toolkit";

export const authMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type?.startsWith("auth/")) {
    const authState = store.getState().authReducer;

    const { token, isAuthenticated } = authState;

    localStorage.setItem("authToken", JSON.stringify(token));
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }

  return result;
};
