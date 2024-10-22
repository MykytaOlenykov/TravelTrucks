import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeLocationFilter(state, { payload }) {
      state.location = payload;
    },
  },
});

export const selectLocationFilter = (state) => state.filters.location;

export const { changeLocationFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
