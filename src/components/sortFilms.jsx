import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortFilms() {
  const [sort, setSort] = React.useState('');

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">SORT BY</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="sort_by"
          onChange={handleChange}
        >
          <MenuItem value={10}>RELEASE DATE</MenuItem>
          <MenuItem value={20}>RANKING</MenuItem>
          <MenuItem value={30}>IMDB RAITING</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}