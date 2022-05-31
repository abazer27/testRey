import React, { useState } from "react";
import { Box, Container, Typography } from "@material-ui/core";
import Navbar from '@components/Navbar'
import Home from '@components/Home'
import Pokedex from '@components/Pokedex'
import axios from "axios";

const PokemonList = ({ getPokemon }) => {
    const [pokemon, setPokemon] = useState(getPokemon)
    return (
        <Box>
            <Navbar />
            <Home />
            <Pokedex pokemon={pokemon} />
        </Box>
    );
};

export default PokemonList;

export async function getStaticProps(context) {
    const getPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
        .then(res => res.data)
    return {
        props: {
            getPokemon
        }
    }
}