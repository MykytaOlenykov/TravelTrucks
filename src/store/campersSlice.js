import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  searchParams: {},
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
  },
});

export const selectFavoriteCampers = (state) => state.campers.favorites;

export const selectCampersSearchParams = (state) => state.campers.searchParams;

export const { toggleCamperFavorite, changeSearchParams } =
  campersSlice.actions;

export default campersSlice.reducer;
