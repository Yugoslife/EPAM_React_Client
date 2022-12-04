import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import FilterLine from "./filterLine";
import MeshFilms from "./meshFilms";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MovieListContainer() {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={2}>
            <Item>
              <FilterLine />
            </Item>
            <Item>
              <MeshFilms />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
