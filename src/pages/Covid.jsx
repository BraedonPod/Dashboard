import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/covid';
import { Typography, Container } from '@mui/material';

import Cards from '../components/Cards/Covid';
import Selector from '../components/Dropdown/Covid';
import Chart from '../components/Charts/Covid';

const Covid = () => {
  const [covidData, setCovidData] = useState({});
  const [country, setCountry] = useState({});

  useEffect(() => {
    async function fetchedCovidData() {
      const data = await fetchData();
      setCovidData(data);
    }
    fetchedCovidData();
  }, [])

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setCovidData(data);
    setCountry(data);
  }

  return (
    <Container>
      <Typography variant="h3" align="center" component="div" gutterBottom>Covid</Typography>
      {Object.keys(covidData).length !== 0 && <Cards data={covidData} />}
      <div className="map-container">
        <Selector handleCountryChange={handleCountryChange} />
        <Chart data={covidData} country={country} />
      </div>
    </Container>
  )
}

export default Covid