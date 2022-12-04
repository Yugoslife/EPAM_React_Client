import * as React from "react";
import Grid from "@mui/material/Grid";
import InputSearch from "../../../components/inputSearch";
import ButtonsSearch from "../../../components/buttonsSearch";
import "./movieSearch.css";

export default function FindMovieField() {
  return (
    <Grid container className="findMovieField" rowSpacing={0} >
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container xs={8}>
          <h1 className="h1-сustom">FIND YOUR MOVIE</h1>
        </Grid>
        <Grid
          xs={12}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          gap={1}
        >
          <InputSearch />
          <ButtonsSearch />
        </Grid>
      </Grid>
    </Grid>
  );
}
