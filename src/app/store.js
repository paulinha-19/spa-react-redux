import { configureStore } from "@reduxjs/toolkit";
import estadosReducer from "../features/estados/estadosSlice";
import municipiosReducer from "../features/municipios/municipiosSlice";
import informacoesReducer from "../features/informacoes/informacaoSlice";
const store = configureStore({
    reducer: {
        estados: estadosReducer,
        municipios: municipiosReducer,
        informacoes: informacoesReducer
    }
});

export default store;