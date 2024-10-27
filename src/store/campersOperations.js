import { createAsyncThunk } from "@reduxjs/toolkit";
import { camperService } from "../services/camperService";
import { isAxiosError } from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ params, signal }, { rejectWithValue }) => {
    try {
      const data = await camperService.getAll({ params, signal });
      return data;
    } catch (error) {
      const errorCode = isAxiosError(error)
        ? error.code === "ERR_CANCELED"
          ? null
          : error.response.status
        : 500;
      return rejectWithValue({ errorCode });
    }
  }
);
