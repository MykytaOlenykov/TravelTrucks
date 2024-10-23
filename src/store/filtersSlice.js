import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleEquipments: [
    {
      value: true,
      field: "AC",
      categoryKey: "AC",
      selected: false,
    },
    {
      value: "automatic",
      field: "transmission",
      categoryKey: "automatic",
      selected: false,
    },
    {
      value: true,
      field: "kitchen",
      categoryKey: "kitchen",
      selected: false,
    },
    {
      value: true,
      field: "TV",
      categoryKey: "TV",
      selected: false,
    },
    {
      value: true,
      field: "bathroom",
      categoryKey: "bathroom",
      selected: false,
    },
    {
      value: "petrol",
      field: "engine",
      categoryKey: "petrol",
      selected: false,
    },
    {
      value: true,
      field: "radio",
      categoryKey: "radio",
      selected: false,
    },
    {
      value: true,
      field: "refrigerator",
      categoryKey: "refrigerator",
      selected: false,
    },
    {
      value: true,
      field: "microwave",
      categoryKey: "microwave",
      selected: false,
    },
    {
      value: true,
      field: "gas",
      categoryKey: "gas",
      selected: false,
    },
    {
      value: true,
      title: "water",
      categoryKey: "water",
      selected: false,
    },
  ],
  vehicleTypes: [
    {
      value: "panelTruck",
      field: "form",
      categoryKey: "panelTruck",
      selected: false,
    },
    {
      value: "fullyIntegrated",
      field: "form",
      categoryKey: "fullyIntegrated",
      selected: false,
    },
    {
      value: "alcove",
      field: "form",
      categoryKey: "alcove",
      selected: false,
    },
  ],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeLocationFilter(state, { payload }) {
      state.location = payload;
    },
    changeVehicleEquipment(state, { payload }) {
      const idx = state.vehicleEquipments.findIndex(
        ({ field }) => field === payload
      );
      if (idx !== -1) {
        state.vehicleEquipments[idx].selected =
          !state.vehicleEquipments[idx].selected;
      }
    },
    changeVehicleTypes(state, { payload }) {
      const idx = state.vehicleTypes.findIndex(
        ({ value }) => value === payload
      );
      if (idx !== -1) {
        state.vehicleTypes[idx].selected = !state.vehicleTypes[idx].selected;
      }
    },
  },
});

export const selectLocationFilter = (state) => state.filters.location;

export const selectVehicleEquipments = (state) =>
  state.filters.vehicleEquipments;

export const selectVehicleTypes = (state) => state.filters.vehicleTypes;

export const {
  changeLocationFilter,
  changeVehicleEquipment,
  changeVehicleTypes,
} = filtersSlice.actions;

export default filtersSlice.reducer;
