import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOperations";

const defaultSearchParams = {
  limit: 4,
  page: 1,
};

const initialState = {
  items: [],
  total: 0,
  searchParams: { ...defaultSearchParams },
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    changeSearchParams(state, { payload }) {
      state.searchParams = { ...defaultSearchParams, ...payload };
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchCampers.fulfilled, (state, { payload }) => {
      state.items = payload?.items ?? [];
      state.total = payload?.total ?? 0;
    }),
});

export const selectCampers = (state) => state.campers.items;

export const selectCampersSearchParams = (state) => state.campers.searchParams;

export const { changeSearchParams } = campersSlice.actions;

export default campersSlice.reducer;
