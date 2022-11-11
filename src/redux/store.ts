import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";

import galleryReducer from "./gallery/gallerySlice";
import galleryImageDetailReducer from "./gallery/imageDetailSlice";
import filterReducer from "./filter/slice";

const rootReducer = combineReducers({
  galleryReducer,
  filterReducer,
  galleryImageDetailReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
