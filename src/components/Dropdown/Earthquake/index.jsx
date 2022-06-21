import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Selector = ({ handleMapChange }) => {
  const [filter, setFilter] = useState("all_day");

  const handleChange = (event) => {
    setFilter(event.target.value);
    handleMapChange(event.target.value);
  };

  return (
    <FormControl sx={{ mb: 2, mr: 'auto', ml: 'auto', width: '40%', '@media (max-width: 900px)': {width: '100%'} }}>
      <InputLabel id="earthquake-filter-map-label">Filter</InputLabel>
      <Select
        labelId="earthquake-filter-map-label"
        id="earthquake-filter-map"
        value={filter}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value="all_hour">Past Hour</MenuItem>
        <MenuItem value="all_day">Past Day</MenuItem>
        <MenuItem value="all_week">Past 7 Days *Slow*</MenuItem>
        <MenuItem value="all_month">Past 30 Days *Slow*</MenuItem>
      </Select>
    </FormControl>
  )
}

export default Selector