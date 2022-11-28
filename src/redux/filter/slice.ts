import { FilterState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FilterState = {
  currentPage: 1,
  limit: 20,
  offset: 0,
  searchValue: "",
};

export const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setOffset(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCurrentPage, setOffset, setLimit, setSearchValue } =
  slice.actions;

export default slice.reducer;
