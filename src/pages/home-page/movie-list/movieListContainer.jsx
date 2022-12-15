import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Stack";
import FilterLine from "./filterLine";
import MeshFilms from "./meshFilms";
import "./movieList.css";
import AxiosTest from './axiosTest'

export default function MovieListContainer() {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }} className="list-container">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={6}>
            <FilterLine />
            <MeshFilms />
            <AxiosTest/>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
