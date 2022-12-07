import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import BasicDatePicker from '../../../components/datePicker'


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
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={12}>
              <DialogTitle>ADD MOVIE</DialogTitle>{" "}
            </Grid>

            <Grid xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="TITLE"
                type="email"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid>
             <BasicDatePicker />
            </Grid>

            <Grid>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="MOVIE URL"
                type="url"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid></Grid>
            {/* <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OVERVIEW"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions> */}
            <Grid xs={6}>
              <Button onClick={handleClose}>RESET</Button>
              <Button onClick={handleClose}>SUBMIT</Button>
            </Grid>
            {/* </DialogActions> */}
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
