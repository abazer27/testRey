import React from 'react'
import TopNavbar from './TopNavbar'
import Logo from './../../assets/img/pokemon.png'
import { Box, Button } from '@material-ui/core'
import { ROUTES_PATH } from "@constants/config";
import { useRouter } from "next/router";


const index = () => {
  const route = useRouter();
  return (
    <Box>
      <TopNavbar />
      <Box component="ul" display="flex" alignItems='center' style={{ listStyle: 'none', gap: '3.5rem', fontSize: '16px', paddingLeft: '100px' }}>
        <Box component="li">
          <img src={Logo.src} alt="Pokemon Home" />
        </Box>
        <Box
          component="li"
        >
          <Button
            style={{ color: '#E6AB09', fontWeight: '700' }}
            onClick={() =>
              route.push(
                ROUTES_PATH.pokemon_list,
              )
            }
          >
            Home
          </Button>
        </Box>
        <Box component="li">
          Pokemon Type
        </Box>
      </Box>
    </Box>
  )
}

export default index