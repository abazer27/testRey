import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import rootReducer from "./reducers";
import pokemonDetailsReduser from "./pokemonSlice"

const store = configureStore({ reducer: {rootReducer, pokemonDetails: pokemonDetailsReduser} });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
