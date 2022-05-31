import React from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import Pokemon from './../../assets/img/PokemonHome.png'

const index = () => {
  return (
    <Box
      display='flex'
      flexWrap='nowrap'
      justifyContent='center'
      alignItems='center'
      height='880px'
      margin='0 140px'
      style={{ gap: '92px' }}
    >
      <Box width='534px'>
        <Typography
          style={{ fontSize: '52px', lineHeight: '78px', fontWeight: '800', color: '#42494D' }}
        >
          All the Pokémon data you&#39;ll ever need in one place!
        </Typography>
        <Typography
          style={{ color: '#7B8082', fontSize: '20px', lineHeight: '30px', paddingTop: '16px', paddingBottom: '32px' }}
        >Thousands of data compiled into one place</Typography>
        <Box
          style={{ background: '#E6AB09', borderRadius: '14px', width: 'max-content' }}
        >
          <Button
            style={{ padding: '13px 40.5px', color: '#ffffff', fontSize: '20px', lineHeight: '30px', fontWeight: '700', textTransform: 'capitalize' }}
            href='#pokedex'
          >
            Check PokèDex
          </Button>
        </Box>
      </Box>
      <Box>
        <img src={Pokemon.src} alt="" />
      </Box>
    </Box>
  )
}

export default index