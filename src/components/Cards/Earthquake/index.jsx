import React from 'react';
import CountUp from 'react-countup';
import moment from 'moment';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const index = ({ data, pos, filterType }) => {

  data.sort(function (a, b) { return b.mag - a.mag; })

  return (
    <Grid container justifyContent="center" sx={{ mb: 2 }}>
      <Grid item component={Card} xs={12} md={3} sx={{ m: '2% 2%', borderBottom: '20px solid rgba(0,0,255,0.5)'}}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Total</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={data.length} duration={2.5} separator="," />
          </Typography>
          <Typography color="textSecondary">
            <small>{moment().format('MMMM Do YYYY, h:mm:ss a')}</small>
          </Typography>
          <Typography variant="body2">Number of earthquakes this past {filterType}</Typography>
        </CardContent>
      </Grid>

      <Grid item component={Card} xs={12} md={3} sx={{ m: '2% 2%', borderBottom: '20px solid rgba(0,255,0,0.5)'}}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Smallest Earthquake</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={data[data.length - 1].mag} duration={2.5} separator="," decimals={1} />
          </Typography>
          <Typography color="textSecondary">
            <small>{data[data.length - 1].time}</small>
          </Typography>
          <Typography variant="body2">{data[data.length - 1].place}</Typography>
          <Typography sx={{ color: 'lightblue', '&:hover':{color: 'blue'} }}>
            <small onClick={(e) => pos(data[data.length - 1].coordinates[1] + ", " + data[data.length - 1].coordinates[0])}>
              {data[data.length - 1].coordinates[1]}, {data[data.length - 1].coordinates[0]}
            </small>
          </Typography>
        </CardContent>
      </Grid>

      <Grid item component={Card} xs={12} md={3} sx={{ m: '2% 2%', borderBottom: '20px solid rgba(255,0,0,0.5)'}}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Biggest Earthquake</Typography>
          <Typography variant="h5">
            <CountUp start={0} end={data[0].mag} duration={2.5} separator="," decimals={1} />
          </Typography>
          <Typography color="textSecondary">
            <small>{data[0].time}</small>
          </Typography>
          <Typography variant="body2">{data[0].place}</Typography>
          <Typography sx={{ color: 'lightblue', '&:hover':{color: 'blue'} }}>
            <small onClick={(e) => pos(data[0].coordinates[1] + ", " + data[0].coordinates[0])}>
              {data[0].coordinates[1]}, {data[0].coordinates[0]}
            </small>
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  )
}

export default index