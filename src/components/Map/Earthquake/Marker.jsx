import React from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import { Card, CardHeader, CardContent, Typography, Grid } from '@mui/material';

import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';

const Marker = ({ quake, index }) => {
  let color = "";

  if (quake.mag < 2) { color = "green"; }
  else if (quake.mag > 4) { color = "red"; }
  else { color = "blue"; }

  let placeArray = quake.place.split(",")
  let placeArraySplit = placeArray[0].split("of");
  let countryName = placeArray[placeArray.length - 1].trim();

  const style = {
    display: 'flex',
    verticalAlign: 'middle',
    alignItems: 'center'
  }

  return (
    <CircleMarker key={index} center={[quake.coordinates[1], quake.coordinates[0]]} color={color} radius={quake.mag * 2}>
      <Popup>
        <Card>
          <CardContent sx={{ width: '250px' }}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <CardHeader sx={{ p: 0 }} title={countryName} subheader={placeArraySplit[1]} />
              </Grid>
              <Grid item xs={4}>
                <h3>{quake.mag}</h3>
                <small>Richter Scale</small>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" component="div" sx={style}>
                  <LocationOnIcon /><p>Location</p>
                </Typography>
                <Typography variant="body2" component="small">
                  {quake.coordinates[1]}, {quake.coordinates[0]}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" component="div" sx={style}>
                  <KeyboardTabIcon /><p>Distance</p>
                </Typography>
                <Typography variant="body2" component="small">
                  {placeArraySplit[0]}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" component="div" sx={style}>
                  <ScheduleIcon /><p>Time</p>
                </Typography>
                <Typography variant="body2" component="small">
                  {quake.time}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Popup>
    </CircleMarker>
  )
}

export default Marker