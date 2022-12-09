import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const FilterButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "transparent",
  borderColor: "transparent",
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
    backgroundColor: "grey",

    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  "&:focus": {
    boxShadow: "grey",
  },
});

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <FilterButton variant="contained" disableRipple>
        ALL
      </FilterButton>
      <FilterButton variant="contained" disableRipple>
        DOCUMENTARY
      </FilterButton>
      <FilterButton variant="contained" disableRipple>
        COMEDY
      </FilterButton>
      <FilterButton variant="contained" disableRipple>
        HORROR
      </FilterButton>
      <FilterButton variant="contained" disableRipple>
        CRIME
      </FilterButton>
    </Stack>
  );
}

// import * as React from "react";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';

// export default function ButtonsFilters() {
//   return (
//     <Box >
//       <Grid
//         container
//         direction="row"
//         justifyContent="flex-start"
//         alignItems="center"
//       >
//         <Stack spacing={2} direction="row">
//           <Button>ALL</Button>
//           <Button>DOCUMENTARY</Button>
//           <Button>COMEDY</Button>
//           <Button>HORROR</Button>
//           <Button>CRIME</Button>
//         </Stack>
//       </Grid>
//     </Box>
//   );
// }
