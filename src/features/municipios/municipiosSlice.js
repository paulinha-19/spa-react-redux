import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getMunicipios = createAsyncThunk('municipios/getMunicipios', async (UF, { rejectWithValue }) => {
    try {
        const response = await instance.get(`estados/${UF}/municipios?orderBy=nome`);
        console.log("DATA MUNICIPIO", response);
        return response;
    } catch (error) {
        throw rejectWithValue(error.message)
        // throw error
    }
}
);

const initialState = {
    data: [],
    status: "idle",
    message: "",
    loading: false,
    isSuccess: false,
    hasError: false
};

const municipiosSlice = createSlice({
    name: 'municipios',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMunicipios.pending, (state) => {
            state.loading = true;
            state.status = 'Carregando...';
        });
        builder.addCase(getMunicipios.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.status = 'Sucesso';
            state.data = action.payload;
        });
        builder.addCase(getMunicipios.rejected, (state, action) => {
            state.loading = false;
            state.hasError = true;
            state.status = "Erro";
            state.message = action.payload; // action.error.message
        });
    }
});

export default municipiosSlice.reducer