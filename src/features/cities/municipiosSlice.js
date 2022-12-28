import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getCities = createAsyncThunk(
  "city/getCities",
  async (UF, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        `estados/${UF}/municipios?orderBy=nome`
      );
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.message);
      // throw error
    }
  }
);

export const setCity = createAsyncThunk(
  "city/setCity",
  async (arg, { rejectWithValue }) => {
    try {
      return arg;
    } catch (error) {
      throw rejectWithValue(error.message);
      // throw error
    }
  }
);

const initialState = {
  citiesData: [],
  selectedCity: "",
  status: "idle",
  message: "",
  loading: false,
  isSuccess: false,
  hasError: false,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCities.pending, (state) => {
      state.loading = true;
      state.status = "Carregando";
    });
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.status = "Sucesso";
      state.citiesData = action.payload;
    });
    builder.addCase(getCities.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.status = "Erro";
      state.hasError = action.payload; 
    });

    builder.addCase(setCity.fulfilled, (state, action) => {
      state.selectedCity = action.payload.toString();
    });
  }
});

export default citiesSlice.reducer;
