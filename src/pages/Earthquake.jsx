import React, { useEffect, useState } from 'react';
import { fetchDailyData, fetchData } from '../api/earthquake';

import { Typography, Container } from '@mui/material';

import Cards from '../components/Cards/Earthquake';
import Selector from '../components/Dropdown/Earthquake';
import QuakeMap from '../components/Map/Earthquake';

const Earthquake = () => {
  const [quakeData, setQuakeData] = useState([]);
  const [filterType, setFilterType] = useState("day");
  const [mapPos, setMapPos] = useState([]);

  useEffect(() => {
    async function fetchedDailyData() {
      const data = await fetchDailyData();
      setQuakeData(data);
    }
    fetchedDailyData();
  }, [])

  const handleMapPos = (pos) => {
    setMapPos(pos.split(","))
  }

  const handleMapChange = async (selector) => {
    const data = await fetchData(selector);
    setFilterType(selector.split("_")[1]);
    setMapPos([]);
    setQuakeData(data);
  }

  return (
    <Container>
      <Typography variant="h3" align="center" component="div" gutterBottom>Earthquake</Typography>
      {quakeData.length !== 0 && <Cards data={quakeData} pos={handleMapPos} filterType={filterType} />}
      {quakeData.length !== 0 &&
        <div className="map-container">
          <Selector handleMapChange={handleMapChange} />
          <QuakeMap mapData={quakeData} pos={mapPos} />
        </div>
      }
    </Container>
  )
}

export default Earthquake