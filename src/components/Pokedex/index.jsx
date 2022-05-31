import React, { useState } from 'react'
import { Box, Typography, Modal } from '@material-ui/core'
import background from './../../assets/img/Background.png'
import Card from '@components/Card'
import { Pagination } from '@material-ui/lab'
import { TablePagination } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import UsePagination from './../UsePagination'

const index = ({ pokemon }) => {
  const [page , setPage] = useState(1)
  const itemPerPage = 9
  const data = pokemon.results
  const count = Math.ceil(data.length / itemPerPage)
  const _DATA = UsePagination(pokemon.results, itemPerPage)
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Box component='section' id='pokedex'maxHeight='max-content'
      style={{ background: `url(${background.src})` }}
    >
      <Box textAlign='center' p={10}>
        <Typography
          style={{ color: '#42494D', fontSize: '40px', fontWeight: '800', lineHeight: '60px' }}
        >
          PokèDex
        </Typography>
        <Box
          style={{ color: '#42494D', fontSize: '24px', lineHeight: '36px'}}
        >
          <Typography>
            All Generation totaling
          </Typography>
          <Typography>
            999999 Pokemon
          </Typography>
        </Box>
      </Box>
      <Box display='grid' justifyItems='center'>
        <Box display='flex' flexWrap='wrap' justifyContent='center' p="5"
          style={{ gap: '92px', padding: '0 140px' }}
        >
          {_DATA.currentData().map((pkm, index) => (
            <Card key={index} pokemon={pkm} index={index + ((_DATA.currentPage - 1)*(9))} />
          ))}
        </Box>
        <Box p={4} color='#ffffff'>    
          <Pagination 
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            color='secondary'
            />
        </Box>
      </Box>
    </Box>
  )
}

export default index
