import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import BasicDatePicker from "./datePicker";
import SelectGener from './selectGener'

import CongratModal from './congratulationsForm'

const BootstrapButton = styled(Button)({
  marginRight: 60,
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  color: "#F65261",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  background: "rgba(96, 96, 96, 0.68)",
  borderColor: "rgba(96, 96, 96, 0.68)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function AddMovieForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapButton
        variant="contained"
        disableRipple
        onClick={handleClickOpen}
      >
        + ADD MOVIE
      </BootstrapButton>

      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>ADD MOVIE</Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="TITLE"
                placeholder="Film name"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={5}>
              <BasicDatePicker />
            </Grid>

            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="MOVIE URL"
                placeholder="https//:"
                type="url"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="RATING"
                placeholder="0.0"
                type="url"
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={6}><SelectGener /></Grid>
            <Grid item xs={5}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="RUN TIME"
                placeholder="0.0"
                type="url"
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
            <TextField
                autoFocus
                margin="dense"
                id="overview"
                label="OVERVIEW"
                placeholder="Moana Waialiki is a sea voyaging enthusiast and the only daughter..."
                type="url"
                fullWidth
                variant="outlined"
              />
            </Grid>
            

            <Grid item xs={12} 
            direction="row"
            justifyContent="flex-end"
            alignItems="center">
              <Button onClick={handleClose}>Reset</Button>
              <CongratModal handleCloseAddMovieModal={handleClose} />
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
