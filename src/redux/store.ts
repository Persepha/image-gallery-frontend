import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";

import galleryReducer from "./gallery/gallerySlice";
import galleryImageDetailReducer from "./gallery/imageDetailSlice";
import userProfileReducer from "./users/userProfileSlice";
import filterReducer from "./filter/slice";
import authReducer from "./auth/slice";
import { authMiddleware } from "../middlewares/authMiddleware";

const rootReducer = combineReducers({
  galleryReducer,
  filterReducer,
  galleryImageDetailReducer,
  authReducer,
  userProfileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
