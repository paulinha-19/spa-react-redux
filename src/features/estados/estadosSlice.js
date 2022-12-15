import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/config";

export const getEstados = createAsyncThunk('estados/getEstados', async (arg, { rejectWithValue }) => {
    try {
        const response = await instance.get('estados?orderBy=nome');
        console.log("DATA ESTADO", response);
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

const estadosSlice = createSlice({
    name: 'estados',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEstados.pending, (state) => {
            state.loading = true;
            state.status = 'Carregando...';
        });
        builder.addCase(getEstados.fulfilled, (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.status = 'Sucesso';
            state.data = action.payload;
        });
        builder.addCase(getEstados.rejected, (state, action) => {
            state.loading = false;
            state.hasError = true;
            state.status = "Erro";
            state.message = action.payload; // action.error.message
        });
    }
});

export default estadosSlice.reducer