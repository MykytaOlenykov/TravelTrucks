import { createAsyncThunk } from "@reduxjs/toolkit";
import { camperService } from "../services/camperService";
import { isAxiosError } from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ params }, { rejectWithValue }) => {
    try {
      const data = await camperService.getAll({ params });
      return data;
    } catch (error) {
      const errorCode = isAxiosError(error) ? error.response.status : 500;
      return rejectWithValue({ error: errorCode });
    }
  }
);
