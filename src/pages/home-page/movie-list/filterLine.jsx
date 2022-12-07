import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FilterButtons from "../../../components/filterButtons";
import InputSort from "../../../components/inputSort";
import "./movieList.css";

export default function FilterLine() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="filter-line"
      >
        <Grid xs={6}>
          <FilterButtons />
        </Grid>
        <Grid xs={2}>
          <InputSort />
        </Grid>
      </Grid>
    </Box>
  );
}
