import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  vehicleEquipments: [
    {
      value: true,
      title: "AC",
      field: "AC",
      icon: "AC",
      selected: false,
    },
    {
      value: "automatic",
      title: "automatic",
      field: "transmission",
      icon: "automatic",
      selected: false,
    },
    {
      value: true,
      title: "kitchen",
      field: "kitchen",
      icon: "kitchen",
      selected: false,
    },
    {
      value: true,
      title: "TV",
      field: "TV",
      icon: "TV",
      selected: false,
    },
    {
      value: true,
      title: "bathroom",
      field: "bathroom",
      icon: "bathroom",
      selected: false,
    },
    {
      value: "petrol",
      title: "petrol",
      field: "engine",
      icon: "petrol",
      selected: false,
    },
    {
      value: true,
      title: "radio",
      field: "radio",
      icon: "radio",
      selected: false,
    },
    {
      value: true,
      title: "refrigerator",
      field: "refrigerator",
      icon: "refrigerator",
      selected: false,
    },
    {
      value: true,
      title: "microwave",
      field: "microwave",
      icon: "microwave",
      selected: false,
    },
    {
      value: true,
      title: "gas",
      field: "gas",
      icon: "gas",
      selected: false,
    },
    {
      value: true,
      title: "water",
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
