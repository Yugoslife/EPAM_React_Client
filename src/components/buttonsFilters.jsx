import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

export default function ButtonsFilters() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          s: 1,
        },
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>ALL</Button>
          <Button>DOCUMENTARY</Button>
          <Button>COMEDY</Button>
          <Button>HORROR</Button>
          <Button>CRIME</Button>
        </ButtonGroup>
      </Grid>
    </Box>
  );
}

// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//       neutral: {
//         // main: '#64748B',
//         contrastText: '#fff',
//       },
//     },
//   });

// export default function ButtonsFilters() {
//   return (
//       <Stack spacing={1} direction="row">
//          <ThemeProvider theme={theme}>
//         <Button color="neutral" variant="text" size="medium">ALL</Button>
//         <Button color="neutral" variant="contained" size="medium">DOCUMENTARY</Button>
//         <Button color="neutral" variant="contained" size="medium">COMEDY</Button>
//         <Button color="neutral" variant="contained" size="medium">HORROR</Button>
//         <Button color="neutral" variant="contained" size="medium">CRIME</Button>
//         </ThemeProvider>
//       </Stack>
//   );
// }
