import * as React from "react";
import Grid from "@mui/material/Grid";
import FreeSoloCreateOption from '../../../components/inputSearch'
import SearchButtons from '../../../components/buttonSearch'

export default function FindMovieField() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>     
        <h1-сustom>FIND YOUR MOVIE</h1-сustom>
      </Grid>
      <Grid item xs={6}>
        <div><FreeSoloCreateOption /></div>
      </Grid>
      <Grid item xs={6}>
        <div><SearchButtons /></div>
      </Grid>
    </Grid>
  );
}
