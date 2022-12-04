import * as React from "react";
import Grid from '@mui/material/Stack';
import HeaderSearchMovie from "./headerSearchMovie";
import FindMovieField from "./findMovieField";

export default function MovieSearchContainer() {
  return (
    <React.Fragment>
        <Grid >
          <HeaderSearchMovie />
          <FindMovieField />
        </Grid>
    </React.Fragment>
  );
}
