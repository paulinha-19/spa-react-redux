import { configureStore } from "@reduxjs/toolkit";
import estadosReducer from "../features/states/estadosSlice";
import municipiosReducer from "../features/cities/municipiosSlice";
import informacoesReducer from "../features/information/informacaoSlice";
const store = configureStore({
    reducer: {
        states: estadosReducer,
        cities: municipiosReducer,
        informationCity: informacoesReducer
    }
});

export default store;