import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleEquipments: [
    {
      title: "AC",
      type: "boolean",
      field: "AC",
      icon: "AC",
      selected: false,
    },
    {
      value: "automatic",
      title: "automatic",
      type: "string",
      field: "transmission",
      icon: "transmission",
      selected: false,
    },
    {
      title: "kitchen",
      type: "boolean",
      field: "kitchen",
      icon: "kitchen",
      selected: false,
    },
    {
      title: "TV",
      type: "boolean",
      field: "TV",
      icon: "TV",
      selected: false,
    },
    {
      title: "bathroom",
      type: "boolean",
      field: "bathroom",
      icon: "bathroom",
      selected: false,
    },
    {
      value: "petrol",
      title: "petrol",
      type: "string",
      field: "engine",
      icon: "engine",
      selected: false,
    },
    {
      title: "radio",
      type: "boolean",
      field: "radio",
      icon: "radio",
      selected: false,
    },
    {
      title: "refrigerator",
      type: "boolean",
      field: "refrigerator",
      icon: "refrigerator",
      selected: false,
    },
    {
      title: "microwave",
      type: "boolean",
      field: "microwave",
      icon: "microwave",
      selected: false,
    },
    {
      title: "gas",
      type: "boolean",
      field: "gas",
      icon: "gas",
      selected: false,
    },
    {
      title: "water",
      type: "boolean",
      field: "water",
      icon: "water",
      selected: false,
    },
  ],
  vehicleTypes: [
    {
      value: "panelTruck",
      title: "van",
      field: "form",
      icon: "panelTruck",
      selected: false,
    },
    {
      value: "fullyIntegrated",
      title: "fully integrated",
      field: "form",
      icon: "fullyIntegrated",
      selected: false,
    },
    {
      value: "alcove",
      title: "alcove",
      field: "form",
      icon: "alcove",
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
