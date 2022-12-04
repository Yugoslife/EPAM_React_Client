import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HomePage from '../pages/home-page/homePage'


export default function MainContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <HomePage>
            <Box sx={{ bgcolor: '#7a7d80', height: 'auto' }} />
        </HomePage>
      </Container>
    </React.Fragment>
  );
}