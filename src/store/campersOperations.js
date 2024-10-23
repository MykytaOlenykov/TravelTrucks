import { createAsyncThunk } from "@reduxjs/toolkit";
import { camperService } from "../services/camperService";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ params }, { rejectWithValue }) => {
    try {
      const data = await camperService.getAll({ params });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
