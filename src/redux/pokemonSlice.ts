import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: 'pokemonDetails',
  initialState: {
    pokemonDetails:[],
  },
  reducers:{
    storePokemonDetails : (state,action)=> {
      state.pokemonDetails = action.payload;
  }
  }
})

export const { storePokemonDetails } = pokemonSlice.actions;
export default pokemonSlice.reducer;