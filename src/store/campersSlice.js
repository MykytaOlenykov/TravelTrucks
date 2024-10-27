import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOperations";

const initialState = {
  items: [],
  favorites: [],
  searchParams: {},
  total: 0,
  loading: false,
  errorCode: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    toggleCamperFavorite(state, { payload }) {
      if (state.favorites.includes(payload)) {
        state.favorites = state.favorites.filter(
          (favorite) => favorite != payload
        );
      } else {
        state.favorites.push(payload);
      }
    },
    changeSearchParams(state, { payload }) {
      state.searchParams = payload;
    },
    clearCampers(state) {
      state.total = 0;
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.items.push(...payload.items);
        state.total = payload.total;
        state.loading = false;
      })
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorCode = payload.errorCode ?? null;
      }),
});

export const selectFavoriteCampers = (state) => state.campers.favorites;

export const selectCampersSearchParams = (state) => state.campers.searchParams;

export const selectCampers = (state) => state.campers.items;

export const selectCampersTotal = (state) => state.campers.total;

export const selectCampersLoading = (state) => state.campers.loading;

export const selectCampersErrorCode = (state) => state.campers.errorCode;

export const { toggleCamperFavorite, changeSearchParams, clearCampers } =
  campersSlice.actions;

export default campersSlice.reducer;
