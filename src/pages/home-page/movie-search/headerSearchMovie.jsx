import * as React from "react";
import Grid from "@mui/material/Grid";

export default function HeaderSearchMovie() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <h3>netflixroulette</h3>
      </Grid>
      <Grid item xs={6}>
        <button>+ ADD MOVIE</button>
      </Grid>
    </Grid>
  );
}
