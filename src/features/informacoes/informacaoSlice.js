import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getInformacoes = createAsyncThunk('informacoes/getInformacoes', async (municipio, { rejectWithValue }) => {
    try {
        const response = await instance.get(`municipios/${municipio}/distritos?orderBy=nome`);
        console.log("DATA INFORMACOES", response);
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

const informacoesSlice = createSlice({
    name: 'informacoes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInformacoes.pending, (state) => {
            state.loading = true;
            state.status = 'Carregando...';
        });
        builder.addCase(getInformacoes.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.status = 'Sucesso';
            state.data = action.payload;
        });
        builder.addCase(getInformacoes.rejected, (state, action) => {
            state.loading = false;
            state.hasError = true;
            state.status = "Erro";
            state.message = action.payload; // action.error.message
        });
    }
});

export default informacoesSlice.reducer