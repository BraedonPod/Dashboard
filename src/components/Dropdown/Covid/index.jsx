import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { fetchCountries } from '../../../api/covid';

const Selector = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchedData() {
      const data =  await fetchCountries();
      setCountries(data);
    }
    fetchedData();
  }, [setCountries])

  const handleChange = (event) => {
    setFilter(event.target.value);
    handleCountryChange(event.target.value);
  };

  return (
    <>
    {countries.length !== 0 &&
      <FormControl sx={{ mb: 2, mr: 'auto', ml: 'auto', width: '40%', '@media (max-width: 900px)': {width: '100%'} }}>
        <InputLabel id="covid-filter-map-label">Filter</InputLabel>
        <Select
          labelId="ecovidfilter-map-label"
          id="covid-filter-map"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value="">Global</MenuItem>
          {countries.map((country, index) => {
            return <MenuItem key={index} value={country}>{country}</MenuItem>
          })}
        </Select>
      </FormControl>
    }
    </>
  )
}

export default Selector