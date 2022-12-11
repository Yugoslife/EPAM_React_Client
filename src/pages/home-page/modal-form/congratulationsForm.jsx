import * as React from "react";
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#232323",
  color: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CongratModal({handleCloseAddMovieModal}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    handleCloseAddMovieModal()
}
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Submit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Grid item xs={12}>
            <IconButton
          onClick={handleClose}
            color="primary"
            aria-label="close"
            component="label"
          >
            <CloseIcon />
          </IconButton>
            </Grid>
       
          <Typography id="modal-modal-title" variant="h4" component="h1">
            Congratulations !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The movie has been added to database successfully
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

CongratModal.propTypes = {
  handleCloseAddMovieModal: PropTypes.func
}

export default CongratModal