import React from 'react';
import CountUp from 'react-countup';
import moment from 'moment';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const index = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  return (
    <Grid container justifyContent="center" sx={{ mb: 2 }}>
      <Grid item component={Card} xs={12} md={3} sx={{ m: '2% 2%', borderBottom: '20px solid rgba(0,0,255,0.5)' }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Infected</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {moment(lastUpdate).format('MMMM Do YYYY, h:mm:ss a')}
          </Typography>
          <Typography variant="body2">Number of active case of COVID-19</Typography>
        </CardContent>
      </Grid>

      <Grid item component={Card} xs={12} md={3} sx={{ m: '2% 2%', borderBottom: '20px solid rgba(0,255,0,0.5)' }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {moment(lastUpdate).format('MMMM Do YYYY, h:mm:ss a')}
          </Typography>
          <Typography variant="body2">
            Number of recovered cases of COVID-19 -
            <small> {(recovered.value / confirmed.value * 100).toFixed(2) + "%"}</small>
          </Typography>
        </CardContent>
      </Grid>

      <Grid item component={Card} xs={12} md={3} sx={{ m: '2% 2%', borderBottom: '20px solid rgba(255,0,0,0.5)' }}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {moment(lastUpdate).format('MMMM Do YYYY, h:mm:ss a')}
          </Typography>
          <Typography variant="body2">
            Number of deaths caused by COVID-19 -
            <small> {(deaths.value / confirmed.value * 100).toFixed(2) + "%"}</small>
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  )
}

export default index