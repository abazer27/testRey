import { Box, Button, ThemeProvider, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ROUTES_PATH } from "@constants/config";
import { useRouter } from "next/router";
import DetailPokemon from '@pages/pokemon/detail';

const index = ({ handleClose, index, theme }) => {
  const pokemonIndex = index + 1
  const [pokemonDetails, setPokemonDetails] = useState([])
  const route = useRouter();
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
      .then((response) => setPokemonDetails(response.data))
      .catch(error => {
        console.log(error.response)
      });
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Box style={{
        width: '1162px',
        height: '550px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        textTransform: 'capitalize',
        color: '#42494D'
      }}>
        <Box color='#B3B6B8' textAlign='end' p={2.5} onClick={() => (handleClose())}>
          <CloseIcon />
        </Box>
        <Box display='flex'>
          <Box flex={50}>
            <img
              src={pokemonDetails.sprites?.front_default} alt={pokemonDetails.name}
              style={{ width: '100%' }}
            />
          </Box>
          <Box
            flex={50}
            display='grid'
            style={{
              justifyContent: 'start',
              rowGap: '1rem',
              height: 'fit-content'
            }}
          >
            <Typography
              style={{ fontSize: '40px', fontWeight: '700', lineHeight: '60px', paddingBottom: '36px' }}>
              {pokemonDetails.name}
            </Typography>
            <Box display='flex'
              style={{ gap: '8rem' }}
            >
              <Box display='flex'
                style={{ gap: '4rem' }}
              >
                <Typography
                  style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}
                >Weight:</Typography>
                <Typography
                  style={{ fontSize: '20px', lineHeight: '30px' }}
                >{pokemonDetails.height}</Typography>
              </Box>
              <Box display='flex'
                style={{ gap: '4rem' }}
              >
                <Typography
                  style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}
                >Height:</Typography>
                <Typography
                  style={{ fontSize: '20px', lineHeight: '30px' }}
                >{pokemonDetails.weight}</Typography>
              </Box>
            </Box>
            <Box display='flex'>
              <Typography
                style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}
              >Abilities:</Typography>
              <Box component='ul'>
                {pokemonDetails.abilities?.map((abi, index) => (
                  <Box component='li' key={index}
                    style={{ fontSize: '20px', lineHeight: '30px' }}
                  >{abi.ability.name}</Box>
                ))}
              </Box>
            </Box>
            <Box display='flex'
              style={{ gap: '4rem' }}
            >
              <Typography
                style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px' }}
              >Type:</Typography>
              <Box
                display='flex'
                component='ul'
                style={{ listStyle: 'none', margin: '10px 0', padding: 0, rowGap: '1.5rem', columnGap: '2rem', gridTemplateColumns: '1fr 1fr 1fr' }}
              >
                {pokemonDetails.types?.map((type, index) => (
                  <Box
                    component='li'
                    key={index}
                    bgcolor={type.type.name}
                    style={{ color: '#ffffff', padding: '7px 25px', gap: '14px', borderRadius: '25px', fontSize: '20px', fontWeight: '700', lineHeight: '18px' }}
                  >{type.type.name}</Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Button
                onClick={() =>
                  route.push({
                    pathname: ROUTES_PATH.pokemon_detail,
                    query: { index: pokemonIndex }
                  }
                  )
                }
                style={{ fontSize: '20px', fontWeight: '700', lineHeight: '30px', color: '#ffffff', backgroundColor: '#E6AB09', textTransform: 'capitalize', borderRadius: '14px', padding: '10px 25px' }}
              >More Detail</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default index