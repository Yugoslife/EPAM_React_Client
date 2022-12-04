import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import { boxContainer } from './cssStyledClasses'
import { boxContainerSearch } from './cssStyledClasses'
import { boxContainerRectangle } from './cssStyledClasses'
import { boxContainerList } from './cssStyledClasses'
import { boxContainerNetfixRoulette } from './cssStyledClasses'
import MovieSearchContainer from './movie-search/movieSearchContainer'
import MovieListContainer from './movie-list/movieListContainer'


const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ed7474',
  // ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
        <Box id="bx0" sx={boxContainer}>
          <Box id="bx1" sx={boxContainerSearch} className='background_img'>
            <MovieSearchContainer />
          </Box>
          <Box id="bx2" sx={boxContainerRectangle}/>
          <Box id="bx3" sx={boxContainerList}>
            <MovieListContainer/>
            </Box>
          <Box id="bx4" sx={boxContainerNetfixRoulette}><Item>netfix roulette</Item></Box>
        </Box>
        </Grid>
      </Grid>
     </Box>
  );
}