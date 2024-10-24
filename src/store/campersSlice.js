import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchParams: {},
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    changeSearchParams(state, { payload }) {
      state.searchParams = payload;
    },
  },
});

export const selectCampersSearchParams = (state) => state.campers.searchParams;

export const { changeSearchParams } = campersSlice.actions;

export default campersSlice.reducer;
