import * as React from "react";
import Grid from "@mui/material/Grid";
import ButtonsAddMovie from "../../../components/buttonAddMovie";
import "./movieSearch.css";

export default function HeaderSearchMovie() {
  return (
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid
          item
          xs={6}
          container
          direction="row"
        >
          <h3 className="h3-custom">netflixroulette</h3>
        </Grid>

        <Grid
          item
          xs={6}
          container
          direction="row-reverse"
        >
          <ButtonsAddMovie />
        </Grid>
      </Grid>
  );
}
