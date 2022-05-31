import React, { useEffect, useState } from 'react'
import { Box, Typography, Modal } from '@material-ui/core'
import axios from 'axios'
import { makeStyles } from '@material-ui/styles'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './../../assets/Theme/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { storePokemonDetails } from '@redux/pokemonSlice.ts'
import ModalPokemon from './../ModalPokemon'

const index = ({ pokemon, index }) => {
  const pokemonIndex = index + 1
  const pokeIndex = ('000' + (index + 1)).slice(-3);
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [state, setState] = useState({
    raised: false
  })
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
      .then((response) => setPokemonDetails(response.data))
      .catch(error => {
        console.log(error.response)
      });
  }, [pokemonDetails])
  const useStyle = makeStyles({
    root: {
      transition: "transform 1s ease-out"
    },
    cardHovered: {
      transform: "scale3d(1.05, 1.05, 1)",
      boxShadow: '5px 10px 25px rgba(0, 0, 0, 0.35)',
      cursor: 'pointer'
    },
    modal: {
      display: 'grid',
      alignContent: 'stretch',
      justifyContent: 'center'
    },
  })
  const classes = useStyle();
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <ThemeProvider theme={theme}>
      <Box height='510px' borderRadius='24px'
        classes={{ root: state.raised ? classes.cardHovered : "" }}
        onMouseOver={() => setState({ raised: true })}
        onMouseOut={() => setState({ raised: false })}
        onClick={() => setShowModal(true)}
        raised={state.raised} zdepth={state.shadow}
        style={{ padding: '10px 25px', background: '#ffffff', flex: '0 0 23%', maxWidth: '300px' }}
      >
        <Box width='275px' height='275px' display='grid' justifyContent='center' justifyItems='center' alignItems='center' >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
            alt={pokemon.name}
            style={{ width: '200%' }}
          />
        </Box>
        <Box>
          <Typography
            style={{ color: '#B3B6B8', fontSize: '20px', fontWeight: '700', lineHeight: '20px' }}
          >
            #{pokeIndex}
          </Typography>
          <Typography
            style={{ textTransform: 'capitalize', color: '#42494D', fontSize: '40px', fontWeight: '700', lineHeight: '60px' }}
          >
            {pokemon.name}
          </Typography>
        </Box>
        <Box>
          <Box component='ul' display='grid' style={{ listStyle: 'none', margin: '10px 0', padding: 0, rowGap: '1.5rem', columnGap: '2rem', gridTemplateColumns: '1fr 1fr 1fr' }}>
            {pokemonDetails.types?.map(type => (
              <Box
                component='li'
                bgcolor={type.type.name}
                key={type.slot}
                color='#ffffff'
                background='paper'
                style={{ textTransform: 'capitalize', padding: '7px 25px', gap: '10px', borderRadius: '25px', fontSize: '20px', fontWeight: '700', lineHeight: '18px', }}
              >
                {type.type.name}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Modal
        open={showModal}
        className={classes.modal}
      >
        <ModalPokemon handleClose={handleClose} index={index} theme={theme} />
      </Modal>
    </ThemeProvider>
  )
}

export default index
