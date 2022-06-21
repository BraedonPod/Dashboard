import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import moment from 'moment';
import { fetchDailyData } from '../../../api/covid';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDailyData();
      setDailyData(data);
    }
    fetchData();
  }, []);

  const lineChart = (
    dailyData.length
      ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => moment(date).add(1, 'days').format("YYYY-MM-DD")),
            datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: '#3333ff',
              fill: true,
            }, {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Deaths',
              borderColor: 'red',
              backgroundColor: 'rgba(255,0,0,0.5)',
              fill: true,
            }, {
              data: dailyData.map(({ recovered }) => recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              fill: true,
            },],
          }}
        />) : null
  );

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgba(0,0,255,0.5)',
                'rgba(0,255,0,0.5)',
                'rgba(255,0,0,0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value]
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current State in ${country}` },
          }}
        />
      ) : null
  );

  return (
    <>
      {Object.keys(country).length ? barChart : lineChart}
    </>
  )
}

export default Chart