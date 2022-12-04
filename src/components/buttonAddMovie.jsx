import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

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

export default function ButtonsAddMovie() {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="contained" disableRipple>
        + ADD MOVIE
      </BootstrapButton>
    </Stack>
  );
}
