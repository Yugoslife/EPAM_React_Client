import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import ButtonsFilters from "../../../components/buttonsFilters";
import SortFilms from "../../../components/sortFilms";

export default function FilterLine() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="row"
  justifyContent="space-between"
  alignItems="stretch">
        <Grid xs="auto">
          <ButtonsFilters />
        </Grid>

        <Grid xs="auto" >
          <SortFilms />
        </Grid>
      </Grid>
    </Box>
  );
}
