import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getInformationCity = createAsyncThunk(
  "information/getInformationCity",
  async (municipio, { rejectWithValue }) => {
    try {
      const response = await instance.get(`municipios/${municipio}/distritos?orderBy=nome`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
      // throw error
    }
  }
);

const initialState = {
  dataInformation: [],
  status: "idle",
  message: "",
  loading: false,
  isSuccess: false,
  hasError: null
};

const informationCitySlice = createSlice({
  name: "informationCity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInformationCity.pending, (state) => {
      // state.loading = true;
      state.status = "Carregando";
    });
    builder.addCase(getInformationCity.fulfilled, (state, action) => {
      // state.loading = false;
      // state.isSuccess = true;
      state.status = "Sucesso";
      state.dataInformation = action.payload;
    });
    builder.addCase(getInformationCity.rejected, (state, action) => {
      // state.loading = false;
      state.hasError = action.payload; // action.error.message
      state.status = "Erro"
    });
  }
});

export default informationCitySlice.reducer;
