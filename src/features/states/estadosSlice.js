import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getStates = createAsyncThunk(
  "state/getStates",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await instance.get("estados?orderBy=nome");
      return response.data;
    } catch (error) {
      throw rejectWithValue(`${error.code}. Status code: ${error.response.status}`);
    }
  }
);

export const setState = createAsyncThunk(
  "state/setState",
  async (selectedState, { rejectWithValue }) => {
    try {
      return selectedState;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

const initialState = {
  statesData: [],
  selectedState: "",
  status: "idle",
  loading: false,
  hasError: null
};

const statesSlice = createSlice({
  name: "states",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStates.pending, (state) => {
      state.loading = true;
      state.status = "Carregando";
    });
    builder.addCase(getStates.fulfilled, (state, action) => {
      // state.loading = false;
      // state.isSuccess = true;
      state.status = "Sucesso";
      state.statesData = action.payload;
    });
    builder.addCase(getStates.rejected, (state, action) => {
      state.loading = false;
      // state.hasError = true;
      state.hasError = action.payload;
      state.status = "Erro"
    });

    builder.addCase(setState.fulfilled, (state, action) => {
      state.selectedState = action.payload;
    });
  }
});

export default statesSlice.reducer;
